import { Router } from 'express'

import { authjwt } from '../app/middleware'
import { verifySignIn } from '../app/middleware'
import { getRole } from '../app/controllers/roleController'

const roleRoutes = Router()

// get role by users
roleRoutes.get('/api/role', [authjwt.verifyToken, verifySignIn.checkUserExisted], getRole)

export default roleRoutes
