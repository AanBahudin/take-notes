require('dotenv').config()

// express
const express = require('express')
const app = express()
app.use(express.json())

// external packages
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

// connect to db function
const connect = require('./db/connect')

// import routes
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoute')
const noteRoutes = require('./routes/notesRoute')

// using external packages
app.use(cookieParser(process.env.JWT_SECRET))
app.use(morgan('dev'))
app.use(cors())

// routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/notes', noteRoutes)

app.get('/', (request, response) => {
   response.send('testing route')
})

app.get('/api/v1', (req, res) => {
    console.log(req.signedCookies)
    res.send('testing cookie route')
})


const start = async () => {
    try {
        await connect(process.env.MONGO_URL)
        app.listen(process.env.SERVER_PORT || 5000, () => {
            console.log(`server is running on PORT 5000`);
        })
    } catch (error) {
        console.log(error)
    }
}

start();