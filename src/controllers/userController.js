import { findAllUser, createUser, updateUser, destroyUser, findUserByPk } from '../services/userService'

const getAllUsers = async (req, res, next) => {
  try {
    const users = await findAllUser()
    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

const getUser = async (req, res, next) => {
  const { id } = req.params
  try {
    const user = await findUserByPk(id)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

const addUser = async (req, res, next) => {
  const data = req.body
  try {
    const user = await createUser(data)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

const editUser = async (req, res, next) => {
  const data = req.body
  try {
    const user = await updateUser(data)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  const { id } = req.body
  try {
    const user = await destroyUser(id)
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export { getAllUsers, addUser, editUser, deleteUser, getUser }
