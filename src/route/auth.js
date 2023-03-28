import { Router } from 'express'
import { handleLogin } from '../controllers/authController'

const router = Router()

// router.post('/', authController.handleLogin)
router.post('/', handleLogin)

export default router
