import { userAuth } from '../services/authService'

// require('dotenv').config()

const handleLogin = async (req, res, next) => {
  try {
    const { accessToken, newRefreshToken, roles } = await userAuth(req)
    // res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({ accessToken, roles })
  } catch (error) {
    next(error)
  }

}

// const handleLogin1 = async (req, res) => {


//   const { user, pwd } = req.body
//   if (!user || !pwd) return res.status(400).json({ message: 'Username and password are required.' })
//   const foundUser = User.findOne({
//     where: {
//       username: user
//     },
//     include: Role
//   })
//   if (!foundUser) return res.sendStatus(401) //Unauthorized
//   // evaluate password
//   const match = await bcrypt.compare(pwd, foundUser.password)
//   if (match) {
//     const roles = Object.values(foundUser.roles)
//     // create JWTs
//     const accessToken = jwt.sign(
//       {
//         UserInfo: {
//           username: foundUser.username,
//           roles: roles
//         }
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: '30s' }
//     )
//     const refreshToken = jwt.sign({ username: foundUser.username }, process.env.REFRESH_TOKEN_SECRET, {
//       expiresIn: '1d'
//     })
//     // Saving refreshToken with current user
//     const otherUsers = usersDB.users.filter((person) => person.username !== foundUser.username)
//     const currentUser = { ...foundUser, refreshToken }
//     usersDB.setUsers([...otherUsers, currentUser])
//     await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'), JSON.stringify(usersDB.users))
//     res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
//     res.json({ accessToken })
//   } else {
//     res.sendStatus(401)
//   }
// }

export { handleLogin }
