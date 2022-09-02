import { readFile } from 'fs/promises'
import dotenv from 'dotenv'                 //loads variables from .env file not uploaded to GitHub (need for MONGO_URL)
import connectDB from './db/connect.js'     //MongoDB connection
import Job from './models/Job.js'


dotenv.config()

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Job.deleteMany()  //remove all existing docs
        const jsonProducts = JSON.parse(await readFile(new URL('./mock-data.json', import.meta.url)))
        await Job.create(jsonProducts)  //pass array into Job schema
        console.log('Success!')
        process.exit(0)

    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

start()


