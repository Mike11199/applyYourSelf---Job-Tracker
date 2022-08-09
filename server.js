import cors from 'cors'
import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

// db and authenticate user
import connectDB from './db/connect.js'



// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'




// middleware 
import notfoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

//allows front and back end to communicate with cross origin resource sharing between diff domains
app.use(cors())

// allows JSON data to be available to us
app.use(express.json())

app.get('/', (req,res) => {
    // throw new Error ('error')
    res.json({msg: 'Welcome!'})
})

app.get('/api/v1', (req,res) => {
    // throw new Error ('error')
    res.json({msg: 'API'})
})



app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notfoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


// app.listen(port, ()=>{
   
//     // callback function
//     console.log(`Server is listening on port ${port}...`)

// })




//set up asynchronous function to connect to mongoose
//this allows the server to only spin up if it is successful
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL) 
        app.listen(port, ()=>{
   
            // callback function
            console.log(`Server is listening on port ${port}...`)
        
        })
    }
    catch (error) {
        console.log(error)
    }
} 

start()