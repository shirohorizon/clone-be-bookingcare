import express from 'express'
import cors from 'cors'

import corsOptions from './config/corsOptions'
import initWebRouters from './route/web'
import errorHandler from './middleware/errorHandler'
import viewEngine from './config/viewEngine'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3500

app.use(cors(corsOptions))

// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app)
initWebRouters(app)

// error
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
