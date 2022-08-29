import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'



const register = async (req, res) => {
 
        const {name, email, password} = req.body
        
        if (!name || !email || !password) {
            throw new BadRequestError('please provide all values') 
        }



// This section returns a BadRequestError if a user already exists (looking up by email). 
// If the user does not already exist, it returns a response of the JSON for the user and JWT token.
const userAlreadyExists = await User.findOne({email})
if(userAlreadyExists){
    throw new BadRequestError('Email already in use')
}
        const user = await User.create({ name, email, password })
        const token = user.createJWT()
        res
            .status(StatusCodes.CREATED)
            .json({
                 user: { 
                    email: user.email, 
                    lastName: user.lastName, 
                    location: user.location,
                    name: user.name,
                },
                token,
                location: user.location,
            })

}



const login = async (req, res) => {
    
    //set up variables email and password by obj destructuring req.body.email and req.body.password
    const {email, password} = req.body
    
    //If email of password wasn't inputted on the form on the front-end, return error
    if (!email || !password){
        throw new BadRequestError('Please provide all values')
    }
    
    //grab user from database, looking up by the email ID
    //'.select('+password') is added because of 'select: false' in User.js for password to not get ps in response   
    // because user is an instance method
    const user = await User.findOne({ email }).select('+password') 
    
    //check if User exists in the database
    if(!user){
        throw new UnAuthenticatedError('Invalid Credentials')
    } 
    console.log(user)

    //check if password is correct to hashed version in DB
    const isPasswordCorrect = await user.comparePassword(password)  
    if(!isPasswordCorrect) {
        throw new UnAuthenticatedError('Invalid Credentials')
    } 

    //create JSON web token to keep user logged in even if page refreshes
    const token = user.createJWT()
    user.password = undefined   //to not show password in response
    res.status(StatusCodes.OK).json({user,token, location: user.location})
}
   


const updateUser = async (req, res) => {   
    const {email, name, lastName, location} = req.body

    if (!email || !name || !lastName || !location) {
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.findOne({_id:req.user.userId})

    user.email = email
    user.name = name
    user.lastName = lastName
    user.location = location

    await user.save()

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({user,token, location: user.location})
    
}

export { register, login, updateUser }