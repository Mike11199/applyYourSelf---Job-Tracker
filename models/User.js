import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String, 
        required: [true, 'Please provide email'],
        validate:{
            validator: validator.isEmail,
            message: 'Please provide a valid email',
        },
        unique: true,
    },
    password: {
        type: String, 
        required: [true, 'Please provide password'],
        minlength: 6,
        select: false,
    },
    lastName: {
        type: String,  
        maxlength: 20,
        trim: true,
        default:'lastName',
    },
    location: {
        type: String,  
        maxlength: 20,
        trim: true,
        default:'my city',
    },

})

// set up middleware for MongoDB for hashing the password
userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    //console.log(this)
})

//method to create a JSON Web Token that will expire for the user in one day, otherwise user will be logged out on page refresh. 
//this token is saved in the user's local storage
userSchema.methods.createJWT = function () {
    return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
}

//instance method
userSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('User', userSchema)

