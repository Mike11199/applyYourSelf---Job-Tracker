import mongoose from 'mongoose'

//returns a promise
const connectDB = (url) => {
    return mongoose.connect(url)
}


export default connectDB