import userApi from './api/user.api'
import authRouter from './auth'
import verifyJWT from '../middleware/verifyJWT'

const initWebRouters = (app) => {
  console.log('app')
  // route
  // app.use('/register', require('./routes/register'));
  app.use('/auth', authRouter)
  // app.use('/refresh', require('./routes/refresh'));
  // app.use('/logout', require('./routes/logout'));

  // api
  // app.use(verifyJWT)
  app.use('/user', userApi)

  return app
}

export default initWebRouters
