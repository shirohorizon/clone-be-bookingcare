import { Router } from 'express'
import { getAllUsers, addUser, editUser, deleteUser, getUser } from '../../controllers/userController'

const router = Router()

// curd
router.route('/').get(getAllUsers).post(addUser).put(editUser).delete(deleteUser)

// profile
router.route('/:id').get(getUser)

export default router
