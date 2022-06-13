import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './db/connect.js'

// middleware 
import notfoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'


app.get('/', (req,res) => {
    // throw new Error ('error')
    res.send('Welcome!')
})

app.use(notfoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


// app.listen(port, ()=>{
   
//     // callback function
//     console.log(`Server is listening on port ${port}...`)

// })




//set up asynchronous function to connect to mongoose
//this allows the server to only spin up if it is succesful
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