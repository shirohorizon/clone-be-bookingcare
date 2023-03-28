import { Allcode, User } from '../db/models'
import { NotImplementedError } from '../middleware/errorHandler'
import PwdUtil from '../util/PwdUtil'
import jwt from 'jsonwebtoken'
require('dotenv').config()

const userAuth = async (req) => {
  const cookies = req.cookies
  console.log(`cookie available at login: ${JSON.stringify(cookies)}`)
  const { email, pwd } = req.body
  if (!email || !pwd) throw new NotImplementedError(404, 'Email and password are required.')
  const foundUser = await User.findOne({
    where: {
      email: email
    },
    include: {
      model: Allcode,
      as: 'roleData',
      required: true,
    },
    raw: true,
    nest: true
  })
  if (!foundUser) throw new NotImplementedError(401, 'Unauthorized')
  // evaluate password

  const match = await PwdUtil.compare(pwd, foundUser.password)

  if (match) {
    const roles = foundUser.roleData
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          roles: roles
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    )
    const newRefreshToken = jwt.sign({ username: foundUser.username }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d'
    })

    // Changed to let keyword
    let newRefreshTokenArray =
      !cookies?.jwt && !foundUser.refreshToken
        ? null
        : foundUser.refreshToken.split(';').filter(rt => rt !== cookies.jwt).join(';')


    if (cookies?.jwt) {
      /* 
      Scenario added here: 
          1) User logs in but never uses RT and does not logout 
          2) RT is stolen
          3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
      */
      const refreshToken = cookies.jwt
      const foundToken = await User.findOne({ where: { refreshToken } })

      // Detected refresh token reuse!
      if (!foundToken) {
        console.log('attempted refresh token reuse at login!')
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = []
      }

      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    }

    const refreshToken = newRefreshTokenArray ? `${newRefreshTokenArray};${newRefreshToken}` : newRefreshToken
    // Saving refreshToken with current user
    await User.update(
      { ...foundUser, refreshToken },
      { where: { id: foundUser.id } }
    )
    return { accessToken, roles, newRefreshToken }
  } else {
    throw new NotImplementedError(401, 'Unauthorized')
  }
}

export { userAuth }