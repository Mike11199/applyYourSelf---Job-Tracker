import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

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

app.listen(port, ()=>{
   
    // callback function
    console.log(`Server is listening on port ${port}...`)

})

