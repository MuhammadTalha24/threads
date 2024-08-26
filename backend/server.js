import express from 'express'
import env from 'dotenv'
import dbConnection from './db/dbConnection.js'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
env.config()
const app = express()
const PORT = process.env.PORT || 5000


//middlewares 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use('/api/users', userRoutes)

dbConnection()
app.listen(PORT, () => {
    console.log(`Server Running At ${PORT}`)
})