import cors from 'cors'
import express from 'express'

const app = express()

import dotenv from 'dotenv'
dotenv.config()


import 'express-async-errors'
import morgan from 'morgan'

// db and authenticate user
import connectDB from './db/connect.js'



/**********ONLY FOR DEPLOYING THE APPLICATION**********/
import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000,                // more than in authRoutes for fetch requests when filtering
    message: 'Too many requests from this IP, please try again after 15 minutes',
  })

app.use(apiLimiter)

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

//these three imports for deploying to production
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

// only when ready to deploy
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/build')))

/**********ONLY FOR DEPLOYING THE APPLICATION**********/



// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'


// middleware 
import notfoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

//allows front and back end to communicate with cross origin resource sharing between diff domains
app.use(cors())


// if we're not in the production server, use the morgan npm package to log http requests (make things easier to see in postman)
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

 // parses incoming JSON requests and puts the parsed data in req.
app.use(express.json()) 

/**********ONLY FOR DEPLOYING THE APPLICATION**********/
// app.use(helmet({
//     contentSecurityPolicy: {     //TURN OFF HELMET FOR NOW WILL CAUSE ERRORS IF ALREADY SIGNED IN WITH GOOGLE AUTH
//       directives: {
//         'script-src': [     //https://stackoverflow.com/questions/72675642/because-it-violates-the-following-content-security-policy-directive-script-src
//           'google',         //have to add this or google auth will get a violate content security policy directive error
//           '*.google',
//           '*.google.com',
//           '*.googleapis.com',
//           "'unsafe-inline'",
//           "https://applyyourself-tracker-prod.herokuapp.com*"
//         ],
//       },
//     },
//   })
//   )
  app.use(xss())
  app.use(mongoSanitize())

/**********ONLY FOR DEPLOYING THE APPLICATION**********/

app.get('/', (req,res) => {    
    res.json({msg: 'Welcome!'})
})

app.get('/api/v1', (req,res) => {    
    res.json({msg: 'API'})
})


app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)


/**********ONLY FOR DEPLOYING THE APPLICATION**********/

//directs EVERY get route to the index.html after the auth and jobs route.  needs to be after app.use for other two so we try those first
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

/**********ONLY FOR DEPLOYING THE APPLICATION**********/


app.use(notfoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


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