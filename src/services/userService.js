const { v4: uuid } = require('uuid')

import { User, Allcode } from '../db/models'
import pwd from '../util/PwdUtil'

const findAllUser = async () => {
  return await User.findAll({
    include: [{
      model: Allcode,
      as: 'genderData',
      required: true,
      attributes: ['value']
    }, {
      model: Allcode,
      as: 'positionData',
      required: true,
      attributes: ['value']
    }, {
      model: Allcode,
      as: 'roleData',
      required: true,
      attributes: ['value']
    },],
    raw: true,
    nest: true,
    attributes: {
      exclude: ['password', 'role', 'position', 'gender'],
    }
  })
}

const findUserByPk = async (pk) => {
  const user = await User.findByPk(pk, {
    include: [{
      model: Allcode,
      as: 'genderData',
      required: true,
      attributes: ['value']
    }, {
      model: Allcode,
      as: 'positionData',
      required: true,
      attributes: ['value']
    }, {
      model: Allcode,
      as: 'roleData',
      required: true,
      attributes: ['value']
    },],
    raw: true,
    nest: true,
    attributes: {
      exclude: ['password', 'role', 'position', 'gender'],
    }
  })



  return user
}

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email: email }
  })
  return user
}

const createUser = async (data) => {
  const user = await findUserByEmail(data.email)
  if (user) throw new Error('email is exist!')
  return !user && await User.create({ ...data, password: await pwd.hashSync(data.password), id: uuid() })
}

const updateUser = async (data) => {
  const { id, username, password, ...updateData } = data
  const user = await findUserByPk(id)
  if (!user) throw new Error('id don\'t exist!')
  return user && await User.update({
    ...user,
    ...updateData
  }, {
    where: {
      id: id
    }
  })
}

const destroyUser = async id => {
  const user = await findUserByPk(id)
  return user && await User.destroy({ where: { id } })
}

export {
  findAllUser,
  createUser,
  updateUser,
  destroyUser, findUserByPk, findUserByEmail
}