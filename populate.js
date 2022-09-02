import { readFile } from 'fs/promises'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import Job from './models/Job.js'


dotenv.config()

