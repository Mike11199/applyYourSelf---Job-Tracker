# applyYourSelf-Job-Tracker

</br>
******IN PROGRESS******
</br>
</br>
Full stack MERN Project I created following a Udemy tutorial. Credit MERN Stack Course 2022 - MongoDB, Express, React and NodeJS
by John Smilga.  After completing this project and gaining a high-level view of the code design, I intend to add different pages, functionality, custom CSS, and other tweaks to make this project my own.  I then intend to reuse parts of this work in other future MERN projects, where I can recycle some of the error-handling, middleware, and user authentication code sections.


</br>
</br>
Packages Installed:
</br></br>
<table>
    <tr>
    <td align="center" height="5" width="60">
        <img src="https://necolas.github.io/normalize.css/logo.svg" height=50 width=50 />
        <br /><strong>Normalize.css</strong>
    </td>
    <td align="center" height="5" width="60">
        <img src="https://user-images.githubusercontent.com/91037796/188063026-48a21736-f109-42f3-b375-0161c4212efc.png" height=50 width=50 />
        <br /><strong>JSONWebToken</strong>
    </td>
    <td align="center" height="5" width="60">
        <img src="https://user-images.githubusercontent.com/91037796/188064934-dc52a30f-ca65-4b4c-a8ed-b332eef00331.png" height=50 width=50 />
        <br /><strong>BcryptJS</strong>
    </td>
    <td align="center" height="5" width="60">
        <img src="https://user-images.githubusercontent.com/91037796/188063351-6ec2f8c6-2cd9-4009-80d1-abc6f23c3e63.png" height=50 width=50 />
        <br /><strong>Axios</strong>
    </td>
    <td align="center" height="5" width="60">
        <img src="https://user-images.githubusercontent.com/91037796/188063863-25f47699-5f0f-4511-9576-ba4602b88edc.png" height=50 width=50 />
        <br /><strong>Cors</strong>
    </td>
    </tr>
    <tr>
    <td align="center" height="5" width="60">
        <img src="https://user-images.githubusercontent.com/91037796/188064324-9b1bb56e-8938-418f-ab8d-e78649cc233b.png" height=50 width=50 />
        <br /><strong>Concurrently</strong>
    </td>
    <td align="center" height="5" width="60">
        <img src="https://user-images.githubusercontent.com/91037796/188063595-bb6505c9-8078-46ee-a9e8-80b354475999.png" height=50 width=50 />
        <br /><strong>Morgan</strong>
    </td>
    <td align="center" height="5" width="200">
        <img src="https://user-images.githubusercontent.com/91037796/188282481-b7db60a8-3f2d-47f3-9139-5a94eb3ac3f5.png" height=50 width=50 />
        <br /><strong>ExpressJS Async Errors</strong>
    </td>
    <td align="center" height="5" width="200">
        <img src="https://user-images.githubusercontent.com/91037796/188064573-ab878d34-af50-4f4b-b3d9-cac3da87e4f1.svg" height=50 width=50 />
        <br /><strong>React Icons</strong>
    </td>
    <td align="center" height="5" width="200">
        <img src="https://user-images.githubusercontent.com/91037796/188064507-b024310e-0174-4af0-816c-ef1b7e6c5e7c.png" height=50 width=50 />
    <br /><strong>Moment.js</strong>
    </td>
    </tr>
    <tr>
    <td align="center" height="5" width="200">
        <img src="https://user-images.githubusercontent.com/91037796/188282358-dac0160c-662c-46f1-86fd-facbb876fcfe.png" height=50 width=50 />
    <br/><strong>Recharts</strong>
    </td>
    </tr>
</table>


</br>

<h2>Project Implementations</h2>

-Used NPM to install the NORMALIZE.CSS package.  This allows for normalized CSS to provide cross browser consistency, prevent name collisions, and allow stylizing of entire react components using wrappers.  Is a fancier way of * { } to add a global for CSS elements.  

-Added styled components using wrappers in the wrappers folder.  This involves importing 'styled-components', and adding CSS directly to a .js file.  This is then imported into React components such as the landing page, so that the CSS is more modular.   

-Used React Router to allow for the website to be a multi-page application.  Set up routes for if user is logged in, a registration page, a landing page, and a catch all error page for URLs not defined.

-Added an isMember function to toggle FormRow components on the login/register screen. Utilized conditional rendering with inline ternarny operators (as oppossed to if/else statements) to display different form fields if the user is already registered and can log in, or needs to register.

-Set up a global context using createContext and a useContext hook to pass values deep into the component tree.  This allows the alert function to be used globally as oppossed to passed to each prop manually.

</br>
</br>

<img src="https://user-images.githubusercontent.com/91037796/188056785-a493fc6f-323c-40fd-a9eb-a9fb2eb2991c.png" width=50% height=50%>
</br>



-Used a REDUCER hook (type of function that takes the current state and an action as arguments, and return a new state result) and dispatch functions to enable ALERTS to show and clear after a brief period of time (user not inputting all values into the form, etc.).  
</br>



```js
appContext.js

const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState)   //https://reactjs.org/docs/hooks-reference.html  alternative to useState

const displayAlert = () => {
    dispatch({type:DISPLAY_ALERT})    //arrow function that invokes func with object literal as parameters 
    clearAlert()
}


```

</br>
-The actions dispatched by the reducer will also update the state by returning the spread operator (...) on the state (...state), and in a comma separted list the other state values we want to add/change.  For example, the DISPLAY_ALERT action in the reducer will edit the showAlert state value to true in appContext, which will enable conditional rendering of alert divs.

</br>
</br>

```js
reducer.js

const reducer = (state, action) => {    //hook that takes current state as first argument, and action object as second, returning a new state afterwards
    if(action.type === DISPLAY_ALERT){
        return {
            ...state,              //the ... is the spread operator used to return the existing state array and also add/change onto it the values below
            showAlert:true,
            alertType:'danger',
    alertText:'Please provide all values!'
                }
    }
    
    if(action.type === CLEAR_ALERT){
        return {
            ...state,       
            showAlert:false,
            alertType:'',
            alertText:'',
        }
    }


```


</br>
</br>
<h2>Routing and API Testing</h2>

-Used Postman to test APIs and express routes for user authentication and connecting to the MongoDB database.
</br>
</br>

<img src="https://user-images.githubusercontent.com/91037796/183325705-55763bc2-b43c-4a8e-979b-8e4235bf6c1e.png" width=100% height=100%>


</br>
<h2>MongoDB Implementation - User Model</h2>
</br>

-Created a user model with Mongoose schema for use with MongoDB.  Used a validator package from npm to validate the email.  Ensured the email is unique with the "unique: true" property in the userSchema, and used the error handler to display a message if the email field is not unique (already in the MongoDB database).
</br>
</br>
</br>

```js
User.js

import mongoose from 'mongoose'
import validator from 'validator'

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


export default mongoose.model('User', userSchema)

```
</br>
</br>
<h2>MongoDB Implementation - Password Hashing</h2>
</br>

-Implemented password hashing in MongoDB with npm package BCRYPTJS to protect user data in the event the databse information was ever compromised by a malicious party.  This uses the blowfish cipher and salting to avoid saving the actual password in the datbase.

</br>


```js
User.js

// set up middleware for MongoDB for hashing the password
userSchema.pre('save', async function(){

    if(!this.isModified('password'))return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    //console.log(this)
})
```

</br>
-Also used npm to install packages such as express-async-errors  to avoid numerous try/catch statements for controllers, and http-status-codes to prevent hard coding of status codes.  
</br>

</br>
<img src="https://user-images.githubusercontent.com/91037796/183325614-c074d5f1-ce97-422f-a2ba-c98fb3eaa92b.png" width=70% height=70%>
</br>


</br>
<h2>JSON Web Token (JWT)</h2>
</br>


-Implemented JSON Web Token (JWT) using npm package JSONWEBTOKEN for user authentication and to prevent unauthorized users from accessing pages.
</br></br>

```js
userSchema.methods.createJWT = function () {
    return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
}
```


</br>
</br>
<h2>Connecting the Front and Back End</h2>

-Used npm to install the package CONCURRENTLY so that the front and back end of the application can be ran at the same time with the "npm start" terminal command.  


 ```js
  "scripts": {
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client \""
  },
 ```


-Made use of the npm node.js package CORS to allow for a Connect/Express middleware that can be used to enable CORS (cross-origin resource sharing) between different domains, allowing for the server and front-end to communicate with each other.

 ```js
 Server.js
 
//allows front and back end to communicate with cross origin resource sharing between diff domains
app.use(cors())

// parses incoming JSON requests and puts the parsed data in req.
app.use(express.json()) 

app.get('/', (req,res) => {    
    res.json({msg: 'Welcome!'})
})

app.get('/api/v1', (req,res) => {    
    res.json({msg: 'API'})
})
 ```

</br>


</br>
<h2>Implementing User Registration - Front End</h2>

<h3>Front End</h3>
-Installed AXIOS on the client side so that when the submit button is clicked on the front-end, axios will submit a post request using the authentication routes on the back-end to the MongoDB database.  If the user already exists (looking up by email in the database using the fineOne function), an error will be returned.    
</br>
</br>


```js
Front End:
Register.js

const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isMember} = values
    if (!email || !password || (!isMember && !name)) {
        displayAlert()
        return
    }
    const currentUser = {name, email, password}
    if(isMember){
        loginUser(currentUser)
    }
    else{
        registerUser(currentUser)
    }

}
```

<br/>


```js
 appContext.js

const registerUser = async (currentUser) => {
  dispatch({ type: REGISTER_USER_BEGIN })
  try {
    const response = await axios.post('/api/v1/auth/register', currentUser)
    console.log(response)
    const {user,token,location} = response.data   //destructure the big response object returned from axios
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: {user, token, location},
    })

    addUserToLocalStorage({user,token,location})
  } catch (error) {
    console.log(error.response)
    dispatch({type:REGISTER_USER_ERROR, payload: {msg: error.response.data.msg },})
  }
  clearAlert()
}  
```

<br/>
<br/>




</br>
<h2>useNavigate and User Persistence in Local Storage</h2>

-Implemented the useNavigate hook to navigate programmatically to the dashboard after the registration form is submitted.
</br>

 
 ```js
Register.js

 const Register = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)    

    //these values are grabbed from the app context
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level.
    //It in effect creates "global" variables for a tree of react components - Source:  https://reactjs.org/docs/context.html
    const {user, isLoading, showAlert, displayAlert, registerUser} = useAppContext()  
```
 
 
```js
Register.js

//if the user exists, every time the user or navigate variables change, wait 3 seconds
//then navigate user to the dashboard page
useEffect(()=>{
    if (user) {
        setTimeout(()=> {
           navigate('/')
        }, 3000)
    }
}, [user, navigate] ) //dependency array.  invoked every time the user or navigate values change
```

-We also have to persist the user in local storage as the user will be logged out if they do not exist.  To do this, added functions to add and remove the user from local storage to appContext.js.  This is the file where context, or global react variables are stored.  Also saved the token itself to local storage.  
</br>
```js
appContext.js

//retrieve variables or null from local storage
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')


//add token and user info to local storage so user not kicked out
//curly braces inside the parameters of this arrow function is an example of object destructuring
const addUserToLocalStorage = ({user, token, location}) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
  localStorage.setItem('location', location)
}


const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('location')
}


const registerUser = async (currentUser) => {
  ...
  try {
    ...
    })
    addUserToLocalStorage({user,token,location})
  } catch (error) {
    ...
  }
    ...
}  
```

</br>
</br>
<h2>Login User - Server (Back End)</h2>
</br>
-Installed the npm package MORGAN on the server side as an HTTP request logger middleware, to log HTTP requests, debug APIs used in the application, and help view routes/methods used in controllers.  This will make the program easier to use as multiple routes to send requests are added. After installing, terminal shows the 400 bad request error tested in Postman when attempting to register an email that is already in the MongoDB database.
</br>
</br>


```js
Server Side:
unauthenticated.js

import { StatusCodes } from 'http-status-codes' 
import CustomAPIError from './custom-api.js'

class UnAuthenticatedError extends CustomAPIError{
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED  //401
    }
}

export default UnAuthenticatedError

```

</br>
-After adding the custom error, added an instance method to the user schema to compare password to the hashed password and return 'True' if it matches.
</br>
</br>

```js
Server Side:
User.js

//instance method
userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}
```

</br>
-Then set up the LOG IN CONTROLLER server side in the authController.js file.  This checks that an email and password is entered.  Looks up the user by email in the MongoDB database, and confirms the password entered matches the hashed version of the password in the database.  If everything is correct, it returns a JSON response of the user object (not the password entered), token, and location.
</br>
</br>

```js
Server Side:
authController.js

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
}
```


</br>
<h2>Login User - Front End</h2>
</br>


-Set up a login user async function and added form input to the appContext state to be accessed as a global.


```js
Front End:
appContext.js

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const {data} = await axios.post('/api/v1/auth/login', currentUser)  //post request going to our backend
      
      const {user,token,location} = data   //destructure the big response object returned from axios
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {user, token, location},
      })
  
      addUserToLocalStorage({user,token,location})  //for page refresh
    } catch (error) {
      
      dispatch({
         type:LOGIN_USER_ERROR,
         payload: {msg: error.response.data.msg },
        })
    }
    clearAlert()
  }
```

</br>
-Added line to the if/else statement for the onSubmit action, in the Register.js file, so that the loginUser function in the appContext.js file is invoked if the login form is submitted.  If the user isn't already a member, then the registerUser will be ran.
</br>

```js
Front End:
Register.js

const onSubmit = (e) => {
    e.preventDefault()
    const {name, email, password, isMember} = values
    if (!email || !password || (!isMember && !name)) {
        displayAlert()
        return
    }
    const currentUser = {name, email, password}
    if(isMember){
        loginUser(currentUser)
    }
    else{
        registerUser(currentUser)
    }

}
```

</br>
<h2>Page Structure and Protected Routes</h2>
</br>

-Set up a nested page structure by using a shared layout, made possible by the Outlet component in React BrowserRouter.
</br>
</br>

-Added protected routes to the application so that a user needs to be registered to access certain pages, or else they will be kicked back to the landing page.  This is accomplished by a function which accesses the user object (through the AppContext global state).  The function then returns the user to the landing page programatically if they are not a user, using the navigate hook.
</br>
</br>


```js

ProtectedRoute.js

import { useAppContext } from "../context/appContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const {user} = useAppContext()
    if(!user) {
        return <Navigate to="/landing" />
    }
    return children
}

export default ProtectedRoute

```
</br>
-Set up more components for the page structure.  Added a toggleSidebar to application state with useAppContext().  Added button to show/hide div for log out button using React's useState hook.
</br>
</br>

```js

Navbar.js

 // set up 
 const [showLogout, setShowLogout] = useState(false)             //square brackets is computed property name


//first button which onclick changes the showLogout state
 <button 
          type="button"  
          className="btn" 
          onClick={()=> setShowLogout(!showLogout)}                //set to opposite of current val         
  >

    
   //div which has a conditional class name, to only show the log out button if the state value is true (different class name = different CSS)
  <div className={showLogout?"dropdown show-dropdown" : "dropdown"}> 
          <button type="button" className="dropdown-btn" onClick={()=> console.log('logout user')}>logout</button>
  </div>

```
</br>
<img src="https://user-images.githubusercontent.com/91037796/186835266-602e96b1-27d1-4051-9b98-4e76ce6abaf4.png" width=100% height=100%>
</br>


</br>
</br>
<h2>Log Out Functionality</h2>
</br>


-Added a function in appContext to log out the user, by clearing the user's local storage and setting state values back to null.  Due to the fact that routes are protected, this will also automatically kick the user back to the landing page.
</br>
</br>


```js


appContext.js

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER})
    removeUserFromLocalStorage()
  }


Reducer.js

    if(action.type === LOGOUT_USER){
        return { 
                    ...initialState,
                    user: null,
                    token: null,
                    jobLocation: '',
                    userLocation: '',
                }
    
            }

Navbar.js

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)              //square brackets is computed property name
  const {toggleSidebar, logoutUser, user} = useAppContext()       


//optional chaining to show user.name if the user exists on the button to toggle the logout button div
//button to logout invokes the logout function on button click which exists in the appContext.js file
<FaUserCircle/>
        {user?.name}
        <FaCaretDown/>
        </button>
        <div className={showLogout?"dropdown show-dropdown" : "dropdown"}> 
        {/* above uses conditional class name to trigger different css for drop down box */}
          <button type="button" className="dropdown-btn" onClick={logoutUser}>logout</button>




```


</br>
</br>
<h2>Authentication - Server Setup and Middleware</h2>
</br>


-Restricted access to certain resources so that a user can view only their own data by adding an authentication mdidleware, that checks for the existence of a JSON web token created for the user.
</br>


-First added the "authenticateUser" to the /updateUser route.  /register and /login are still public routes.  Also added authentication to all routes for creating, updating, and deleting jobs.  Added bearer token testing in Postman to test routes with authentication bearer token.


-Created auth.js middleware to also compare the user's JWT to the secret environment variable, throwing an UnAuthenticationError 401 if the token is not correct or has expired.
</br>
</br>


```js
import authenticateUser from '../middleware/auth.js'

app.use('/api/v1/jobs', authenticateUser, jobsRouter)

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/updateUser').patch(authenticateUser, updateUser)


//Middleware for authentication
import jwt from "jsonwebtoken"
import { UnAuthenticatedError } from "../errors/index.js"

UnAuthenticatedError
const auth = async (req, res, next) => {

const authHeader = req.headers.authorization
if(!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError("Authentication Invalid")
}
const token = authHeader.split(' ')[1]
try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    //console.log(payload)
    // attach the user request object
    //req.user = payload
    req.user = { userId: payload.userId }
    next()
    } catch (error) {
    throw new UnAuthenticatedError("Authentication Invalid")
    }   
}

export default auth

```


<img src="https://user-images.githubusercontent.com/91037796/187109684-0b132955-3586-4dc8-b6d6-528f70ddcc06.png" width=100% height=100%>



</br>
</br>
<h2>Update User Functionality</h2>

</br>
-Added a function called <strong>updateUser</strong> in appContext.js on the FRONT END.  This is called by the save changes button on the dashboard profile page, and makes use of the auth route "router.route('/updateUser').patch(authenticateUser, updateUser)" to send an HTTP PATCH request to the Node.JS back end.   
</br>
</br>
</br>

```js
  const updateUser = async (currentUser) => {
    dispatch({ type:UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)
      const { user, location, token } = data
      dispatch({ type:UPDATE_USER_SUCCESS, payload:{user, location, token} })
      addUserToLocalStorage({user, location, token})

    } catch (error) {
      if(error.response.status !==401 ){
        dispatch({ type:UPDATE_USER_ERROR, payload:{msg: error.response.data.msg} })
      }
      
    }
    clearAlert()
  }

```

</br>
-On the back end, the updateUser function in the authController.js file retrieves the user from the MongoDB database by userID, and updates values as needed.  This request also goes through the authentication middleware to ensure the jwt token is valid before this request to the server and database can be processed.
</br>
</br>

```js
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

```

</br>
-Lastly, the reducer updates state as needed based on the result of the HTTP request.
</br>
</br>


```js

   if(action.type === UPDATE_USER_BEGIN){    
        return { ...state, isLoading: true}         //... unpacks the value of the current state
    }
    if(action.type === UPDATE_USER_SUCCESS){
        return { 
                    ...state,
                    isLoading: false,
                    token:action.payload.token,
                    user:action.payload.user,
                    userLocation:action.payload.location,
                    jobLocation:action.payload.location,
                    showAlert: true,
                    alertType:'success',
                    alertText: 'User Profile Updated!',
                }
    }
    if(action.type === UPDATE_USER_ERROR){
        return { 
                    ...state,
                    isLoading: false,
                    showAlert:true,
                    alertType:'danger',
                    alertText: action.payload.msg,
                }
    }

```
    
</br>
<img src="https://user-images.githubusercontent.com/91037796/187361218-2ac36934-c5fb-49bc-81e6-bc372a83d088.png" width=100% height=100%>
</br>
<img src="https://user-images.githubusercontent.com/91037796/187361478-b0277169-5b37-48df-a328-a799bc008f28.png" width=100% height=100%>
    



</br>
</br>
<h2>Create Job Functionality</h2>
</br>




<img src="https://user-images.githubusercontent.com/91037796/187728149-b17a3de9-8628-4465-ae76-d493cfbe64ca.png" width=100% height=100%>



</br>
-Added controller in server (back-end) to get the requested data from the job model in the MongoDB database. 
</br>
</br>


```js
jobsController.js

import Job from '../models/Job.js'   //this is the mongoose model for mongoDB


// async 
const createJob = async (req, res) => {
    const {position, company } = req.body
    
    if (!position || ! company) {
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}


```


</br>
-Added job model using Mongoose for MongoDB so that created jobs can be stored in the database.  Jobs have a unique ID for the job itself and the user who created it (needed for the user to retrieve and edit/delete jobs later on).
</br>
</br>

```js
Job.js

import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    company: {
        type: String, 
        required: [true, 'Please provide company'],
        maxlength: 50,
    },
    position: {
        type: String, 
        required: [true, 'Please provide position'],
        maxlength: 100,
    },
    status: {
        type: String, 
        enum: ['interview', 'declined','pending'],
        default: 'pending',
    },
    jobType: {
        type: String, 
        enum: ['full-time', 'part-time','remote', 'internship'],
        default: 'full-time',
    },
    jobLocation: {
        type: String, 
        default: 'my city',
        required: true,
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    },
},

{ timestamps: true }

)

export default mongoose.model('Job', JobSchema)
```


<img src="https://user-images.githubusercontent.com/91037796/187728304-5207c9ea-527c-4c11-a191-8275c615b466.png" width=100% height=100%>




</br>
-In the front-end, in AppContext.js, created an async function to createjob and post an axios request to the server with the correct authentication (bearer token). Request uses state values that will be updated by the add job form.
</br>
</br>


```js
AppContext.js

const createJob = async () => {

  dispatch({ type: CREATE_JOB_BEGIN })
  try {
    const { position, company, jobLocation, jobType, status } = state
    await authFetch.post('/jobs', {position, company, jobLocation, jobType, status })
    dispatch({ type: CREATE_JOB_SUCCESS })
    dispatch({ type: CLEAR_VALUES })

  } catch (error) {    
    if(error.response.status === 401) return
    dispatch({ type: CREATE_JOB_ERROR, payload:{msg: error.response.data.msg }, })
  }
  clearAlert()
}


```


</br>
-On the front-end added button to invoke the createJob function in appContext.  Also added form fields and drop downs for job info, and actions to pass to the reducer to update state values on create job begin, success, or error.
</br>
</br>


```js
AddJob.js

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    if(isEditing) {
      // eventually editJob()
      return
    }
    createJob()
  }


```






</br>
</br>
<h2>Get All Jobs Functionality</h2>



</br>
-Added get all jobs controller in server (back-end) to get ALL JOBS for a user, looking up by user ID in the jobs table in MongoDB. Tested in Postman with bearer token.
</br>
</br>
</br>


<img src="https://user-images.githubusercontent.com/91037796/187752721-daee1298-ea13-4ceb-90c8-92f72834627d.png" width=100% height=100%>

```js
jobsController.js

import Job from '../models/Job.js'   //this is the mongoose model for mongoDB


const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId })
    res
        .status(StatusCodes.OK)
        .json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
}

```


</br>
-Added front end function axios request with interceptor (bearer token) to the /jobs API to retrieve jobs in an array, which will be used to render jobs on the jobs page.
</br>
</br>

```js
AppContext.js

const getJobs = async () => {
  
  let url = `/jobs`

  dispatch({ type: GET_JOBS_BEGIN })
  
  try {
    const { data } = await authFetch(url)
    const { jobs, totalJobs, numOfPages } = data
    dispatch({ 
      type: GET_JOBS_SUCCESS, 
      payload: {
        jobs,
        totalJobs,
        numOfPages
      },
    }) 
  } catch (error) {
    console.log(error.response)
    // logoutUser()
  }
  clearAlert()
}

```


</br>
-Added the "jobs" and "jobcontainer" components to the front end - "All Jobs" page, using a wrapper as a styled component, to eventually display all jobs for the user.
</br>
</br>


```js
JobsContainer.js

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext()
  useEffect(() => {
    getJobs()
  }, [])

  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
    </Wrapper>
  )
}

```



<img src="https://user-images.githubusercontent.com/91037796/187789270-564bd0ce-e093-4791-8770-eba99ff29114.png" width=30% height=30%>
<img src="https://user-images.githubusercontent.com/91037796/187789808-1545bc54-15a0-40d8-a662-af2983598be2.png" width=100% height=100%>

</br>
-Finished Job and JobsContainer components.  Used npm package MOMENT to convert unix time to a date.  Added icons for each job card.  Imported wrappers for CSS created by the tutorial.
</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/187825939-fbcfe139-00d5-46e5-90df-b7ee2c53a1a6.png" width=100% height=100%>


</br>
</br>
<h2>Edit Job Functionality - Front End State</h2>
</br>


</br>
-Set up the "edit job" functionality.  When clicking an "Edit" button on one of the job cards, it invokes the "setEditJob" function in appContext.js, passing the job id from the state into it.  
</br>
</br>

<img src="https://user-images.githubusercontent.com/91037796/187826867-a7774025-112c-4287-a9f5-9303b40ea319.png" width=30% height=30%>



```js
Job.js

<Link
    to='/add-job'
    className='btn edit-btn'
    onClick={() => setEditJob(_id)}
>
Edit
</Link>

```

```js
appContext.js

const setEditJob = (id) => {
  dispatch({ type: SET_EDIT_JOB, payload:{ id }, })
}

```

</br>
-The "setEditJob" function then dispatches an action which the reducer uses to set the state variable "isEditing" to "true".  The user is programatically navigated to the Add Job which is set to an "edit job" form, using conditional rendering on the form based on the "isEditing" variable.  Instead of passing values into the function here, we just grab all the job info that is already in the state for the job id we are editing.  This is because when we retrieved all jobs for a user, we already have each job in the state in our "jobs array".
</br>
</br>


```js
reducer.js

 if(action.type === SET_EDIT_JOB){    
        
        const job = state.jobs.find((job) => job._id === action.payload.id)  //finds job based on id
        const { _id, position, company, jobLocation, jobType, status} = job  //object destructuring job array item
        return { 
            ...state,
            isEditing: true,
            editJobId: _id,
            position,
            company,
            jobLocation,
            jobType,
            status,
         }         
    }


```


</br>
</br>
<h2>Edit Job Functionality - Server</h2>
</br>


</br>
-Set up jobs controller "updateJob" async function.  Uses "findOne" Mongoose function to find a job by ID, and then the "findOneAndUpdate" Mongoose function to update the job, looking up by ID, with the req.body new values passed into it.  This allows us to edit existing jobs in the MongoDB database from the server.
</br>
</br>

</br>
-Tested in Postman by using the "Job ID" in the URL for the API.
</br>
</br>

<img src="https://user-images.githubusercontent.com/91037796/187831569-6bc4b873-9937-4253-a1a0-7e5dcb6f31aa.png" width=70% height=70%>
<img src="https://user-images.githubusercontent.com/91037796/187831771-b82eaacb-d1c0-4e41-8155-95085fd313fa.png" width=35% height=35%>




```js
jobsController.js

const updateJob = async (req, res) => {
    const {id: jobId } = req.params
    const {company, position } = req.body

    if (!position || ! company) {
        throw new BadRequestError('Please provide all values')
    }

    const job = await Job.findOne({ _id: jobId })

    if (!job){
        throw new NotFoundError(`No job with id : ${jobId}`)
    }


    // check permissions later

    const updatedJob = await Job.findOneAndUpdate({_id: jobId}, req.body,{
        new: true,
        runValidators: true,    //runValidators allows validators to run on properties we provide  such as company or position
                                //i.e. - runValidators won't allow value not in drop-down for position to be passed, but ok if property not included
    })
    res.status(StatusCodes.OK).json({updatedJob})  //201; send JSON for postman
}

```

</br>
</br>
<h3>Check Permissions (User can only edit their jobs)</h3>
</br>

</br>
-Added functionality to check permissions so that users can only edit their OWN jobs, and NOT the jobs of other users in the updateJob function in the jobs controller.
</br>
</br>



```js
checkPermissions.js

import { UnAuthenticatedError } from "../errors/index.js"

const checkPermissions = (requestUser, resourceUserId) => {
    if(requestUser.userId === resourceUserId.toString()) return
    
    throw new UnAuthenticatedError('Not authorized to access this route')
}

export default checkPermissions

```

<img src="https://user-images.githubusercontent.com/91037796/187835956-58278571-c3e3-4902-b994-9db406a3baa8.png" width=60% height=60%>

</br>
-Postman test (screenshot above) throws a 401 unauthorized error on the server, as the user does not have permission to access this API (URL contains Job ID), showing that the checkPermissions function worked as intended.
</br>

<img src="https://user-images.githubusercontent.com/91037796/187835984-4732db2b-23b2-4396-8684-8291b0331ac7.png" width=60% height=60%>





</br>
</br>
<h2>Delete Job Functionality - Server</h2>
</br>


</br>
-Added function to deleteJob on the server, jobs Controller.
</br>
</br>

```js
jobsController.js

const deleteJob = async (req, res) => {
    
    const {id: jobId } = req.params
    
    const job = await Job.findOne({ _id: jobId })

    if (!job){
        throw new NotFoundError(`No job with id : ${jobId}`)
    }

    checkPermissions(req.user, job.createdBy)  //invoke function so that user can only edit their own jobs

    await job.remove()
    res.status(StatusCodes.OK).json({msg: 'Success!  Job removed.'})  //201; send JSON for postman

}

```

</br>
-Tested API in Postman.  Received 200 success code when deleting a user's job, and 401 if unauthorized as expected.
</br>
</br>

<img src="https://user-images.githubusercontent.com/91037796/187838014-09587109-a011-4ca2-9866-21c16b00f758.png" width=60% height=60%>
</br>
<img src="https://user-images.githubusercontent.com/91037796/187838037-d1909253-a54c-4a44-828e-e07e2b8e0d43.png" width=40% height=40%>




</br>
</br>
<h2>Delete Job Functionality - Front End</h2>
</br>


</br>
- Added deleteJob async function to send an AXIOS HTTP DELETE request to the server through the '/api/v1' route, using the 'authFetch' axios variable with the baseURL and axios response/request interceptors with the bearer token.  The function then calls the getJobs() in the try statement to update the jobs displayed on the client side grid container, which will refresh the page if the function did not return an error.
</br>
</br>


```js
appContext.js

const deleteJob = async (jobId) => {
  dispatch({type: DELETE_JOB_BEGIN})
  try {
    await authFetch.delete(`/jobs/${jobId}`)
    getJobs()
  } catch (error) {
    console.log(error.response)
    logoutUser()
  }
}

```


<img src="https://user-images.githubusercontent.com/91037796/188054769-bf3e576f-7e9d-494e-86f6-2b80da6c603a.png" width=60% height=60%>


</br>
</br>
<h2>Edit Job Functionality - Front End</h2>


</br>
- Added editJob async function using the AXIOS HTTP PATCH request.  Looks up the job by its unique ID in the MongoDB Database to edit it.
</br>
</br>


```js
appContext.js

const editJob = async () => {
  dispatch({ type: EDIT_JOB_BEGIN })
  try {
    const { position, company, jobLocation, jobType, status } = state

    await authFetch.patch(`/jobs/${state.editJobId}`, {
      company,
      position,
      jobLocation,
      jobType,
      status,
    })
    dispatch({ type: EDIT_JOB_SUCCESS })
    dispatch({ type: CLEAR_VALUES })

  } catch (error) {
    if (error.response.status === 401) return
    
    dispatch({
      type: EDIT_JOB_ERROR,
      payload: { msg: error.response.data.msg },
    })
  }
  clearAlert()
}


```



<img src="https://user-images.githubusercontent.com/91037796/188054733-3941fabe-ffff-4f1f-a328-28572b91bbae.png" width=60% height=60%>





</br>
</br>
<h2>Mock Data - Mockaroo</h2>
</br>

- Used MOCKAROO to generate a JSON file with 75 rows of mock data for jobs, to test the STATS page.  This generates fake company names, job titles, custom lists (for enumerated values), and timestamps between a range created.  Passed in a "createdBy" ID for a specific user for testing purposes.
</br>
</br>


<img src="https://user-images.githubusercontent.com/91037796/188204564-af830e0b-d2db-4fad-9ca9-2f0e87de304f.png" width=100% height=100%>


</br>

<img src="https://user-images.githubusercontent.com/91037796/188204488-99964b18-6829-4222-aef8-b2d68152868d.png" width=35% height=35%>
</br>

- Created a file in the server (back-end) POPULATE.JS to be ran manually with the command 'node populate'.  This will parse the mock-data.json file also on the back-end and load its data into MongoDB with 80 fake jobs, for testing the STATS page.

</br>

```js
populate.js

import { readFile } from 'fs/promises'
import dotenv from 'dotenv'                 //loads variables from .env file not uploaded to GitHub (need for MONGO_URL)
import connectDB from './db/connect.js'     //MongoDB connection
import Job from './models/Job.js'

dotenv.config()

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Job.deleteMany()  //remove all existing docs
        const jsonProducts = JSON.parse(await readFile(new URL('./mock-data.json)', import.meta.url)))
        await Job.create(jsonProducts)  //pass array into Job schema
        console.log('Success!')
        process.exit(0)

    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

start()
```
</br>
<img src="https://user-images.githubusercontent.com/91037796/188217359-823623d4-071a-4843-a1ba-344725d942be.png" width=45% height=45%>



</br>
<img src="https://user-images.githubusercontent.com/91037796/188230774-77fb8109-873a-48f9-a2ea-9c47d7857455.png" width=60% height=60%>
</br>




</br>
</br>
<h2>STATS Page - MongoDB Aggregation Pipeline (Back End)</h2>
</br>


- Created an aggregation pipeline for MongoDB using the '/stats' API ROUTE with the showStats function.

```js
jobsController.js

//aggregation pipeline for STATS page
const showStats = async (req, res) => {
    let stats = await Job.aggregate([ 
        {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
        {$group: {_id:'$status', count:{$sum:1} } }  //https://www.mongodb.com/docs/manual/reference/operator/aggregation/sum/
    ])

    //iterate over array and pull out id and count.  return accumulator and count
    stats = stats.reduce((acc, curr) =>{
        const { _id: title,count } = curr
        acc[title] = count
        return acc
    }, {} )


    const defaultStats = {
        pending: stats.pending || 0,
        interview: stats.interview || 0,
        declined: stats.declined || 0
    }

    let monthlyApplications = []


    res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications })
}
```


</br>
<img src="https://user-images.githubusercontent.com/91037796/188230621-8f7a4222-1978-43f8-865d-ac70f08d387a.png" width=45% height=45%>
</br>


- Later modified showStats function to iterate over the stats object with the reduce function, redclaring the "stats" variable.


</br>
<img src="https://user-images.githubusercontent.com/91037796/188234373-229a1785-fdd1-4db7-9e9a-f3931825caa9.png" width=45% height=45%>
</br>



</br>
</br>
<h2>STATS Page - Front End</h2>
</br>

</br>
- Similar process as before.  First set up an Axios request to server to retrieve data from the back end with the authFetch bearer token.  Runs action in the reducer to update state with values (not shown).
</br>
</br>

```js
appContext.js

const showStats = async () => {
  dispatch({ type: SHOW_STATS_BEGIN })
  try {
    const { data } = await authFetch('/jobs/stats')
    dispatch({
      type: SHOW_STATS_SUCCESS,
      payload: {
        stats: data.defaultStats,
        monthlyApplications: data.monthlyApplications,
      },
    })
  } catch (error) {
    logoutUser()
  }
  clearAlert()
}

```

</br>


</br>
- Added to the STATS page the useEffect hook to grab variables regarding job stats from the state.  Added the "StatsContainer" component which maps over an array of the "statsItems" and returns "StatsItem" components, to display cards for each job application type.  End result is a page showing the stats as cards.  Uses styled components and CSS already set up from the Udemy tutorial; will likely update later.
</br>
</br>

```js
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => { showStats() }, [])  //empty dependency array - only refresh when component first rendered

  if (isLoading) {
    return <Loading center />           //show loading circle if loading
  }
  return (
    <>
      <StatsContainer />
      {/* AND function allows cards to only display if monthly applications are not empty */}
      {monthlyApplications.length > 0 && <ChartsContainer />} 
    </>
  )
}

export default Stats
```

</br>
<img src="https://user-images.githubusercontent.com/91037796/188242206-e668e161-d905-482a-a399-a4c63c641292.png" width=60% height=60%>
</br>




</br>
</br>
<h2>Monthly Applications Functionality - Back End</h2>
</br>


</br>
- Added another aggregation pipeline to categorize jobs by year and month from the MongoDB database.  This will later be displayed in the monthly applications bar chart on the front-end.
</br>
</br>

```js
jobsController.js

    //PIPELINE 2:  Retrieve jobs and group by month and year
    let monthlyApplications = await Job.aggregate([
        {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
        {$group: {
            _id: {year: {$year:'$createdAt'}, month: {$month: '$createdAt'}},  
            count: { $sum: 1}
        },
    },

    { $sort: { '_id.year': -1, '_id.month': -1 }},  //-1 to sort by latest jobs and months first

    ])
    
```



</br>
- Tested response in Postman to ensure server is retrieving the correct data.
</br>
</br>



<img src="https://user-images.githubusercontent.com/91037796/188322680-9c37e175-fc75-4676-933e-e9e672474d92.png" width=50% height=50%>



</br>
- Used Moment.js to refactor data retrieved from the server into a more readable format for the front-end.
</br>
</br>


```js
jobsController.js

    //PIPELINE 2:  Retrieve jobs and group by month and year
    let monthlyApplications = await Job.aggregate([
        {$match: {createdBy:mongoose.Types.ObjectId( req.user.userId )} },
        {$group: {
            _id: {year: {$year:'$createdAt'}, month: {$month: '$createdAt'}},  
            count: { $sum: 1}
        },
    },

    { $sort: { '_id.year': -1, '_id.month': -1 }},  //-1 to sort by latest jobs and months first

    ])
    
```

</br>
<img src="https://user-images.githubusercontent.com/91037796/188322585-85a3a0e1-b084-4e9e-a3da-e6b60d7d8707.png" width=50% height=50%>
</br>



</br>
</br>
<h2>Monthly Applications Functionality - Front End</h2>
</br>


</br>
- Used the RECHARTS library to render a bar chart and area chart for the monthly applications on the STATS page.   
</br>
</br>

```js
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from 'recharts'
  
  const AreaChartComponent = ({ data }) => {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area type='monotone' dataKey='count' stroke='#2cb1bc' fill='#bef8fd' />
        </AreaChart>
      </ResponsiveContainer>
    )
  }
  
  export default AreaChartComponent
  ```





</br>
<img src="https://user-images.githubusercontent.com/91037796/188325452-077a6d12-4527-4f85-8fc2-31c3c21119f8.png" width=100% height=100%>
</br>


</br>
<img src="https://user-images.githubusercontent.com/91037796/188325464-fa7e2c2f-b242-48c9-b950-669b153c8384.png" width=100% height=100%>
</br>


</br>
</br>
<h2>Filter/Search and Sort Functionality - Back End</h2>
</br>


</br>
- Added to the "getAllJobs" function in the jobsController.js file, the capability to filter/sort by certain values, by adding query strings to the URL parameters of the query object.

</br>
</br>
- Included $regex to provide regular expression capabilities for pattern match in the search function, when retrieving data from MongoDB.  
</br>
</br>

```js

    if (search){
        queryObject.position = { $regex: search, $options: 'i'}
    }


```

</br>


</br>
<img src="https://user-images.githubusercontent.com/91037796/188334642-d0fd27a0-46c0-45b0-955b-29a811c6f826.png" width=50% height=50%>
</br>


</br>
</br>
- Per Mongoose docs, added sort capability to the jobs returned by the function (ascending/descending by created date or by position name).
</br>
</br>

</br>
<img src="https://user-images.githubusercontent.com/91037796/188337646-7c774e52-0a7e-4ef6-97db-a56c34e4b35a.png" width=80% height=80%>
</br>


```js

    //chain the SORT conditions here
    if (sort === 'latest'){
        result = result.sort('-createdAt')
    }
    if (sort === 'oldest'){
        result = result.sort('createdAt')
    }
    if (sort === 'a-z'){
        result = result.sort('position')
    }
    if (sort === 'z-a'){
        result = result.sort('-position')
    }
```

</br>
<img src="https://user-images.githubusercontent.com/91037796/188339050-c35e2bf9-2171-4ca9-b8ee-4f398cf8317e.png" width=80% height=80%>
</br>



BEFORE:
```js
jobsController.js

const getAllJobs = async (req, res) => {

    
    const jobs = await Job.find({ createdBy: req.user.userId })
    res
        .status(StatusCodes.OK)
        .json({ jobs, totalJobs: jobs.length, numOfPages: 1 })

}
  ```
  
  AFTER:
```js
jobsController.js

const getAllJobs = async (req, res) => {

    const {status, jobType, sort, search} = req.query

    const queryObject = {
        createdBy: req.user.userId
    }


    //Here we will add query strings to the URL parameters if certain conditions are met (if drop-down is not all)

    if (status !== 'all'){
        queryObject.status = status
    }
    if (jobType !=='all'){
        queryObject.jobType = jobType
    }
    if (search){
        queryObject.position = { $regex: search, $options: 'i'}
    }


    //no await here (added later)
    let result = Job.find(queryObject)


    //chain the SORT conditions here
    if (sort === 'latest'){
        result = result.sort('-createdAt')
    }
    if (sort === 'oldest'){
        result = result.sort('createdAt')
    }
    if (sort === 'a-z'){
        result = result.sort('position')
    }
    if (sort === 'z-a'){
        result = result.sort('-position')
    }




    //now we add await
    const jobs = await result

    res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })

}
  ```


</br>
</br>
<h2>Filter/Search and Sort Functionality - Front End</h2>

</br>
- Added search container component and functionality to update state values based on form input by the user.
</br>
</br>

<img src="https://user-images.githubusercontent.com/91037796/188342551-023b1a53-ad95-4a1c-b5fe-a50a1b42d444.png" width=80% height=80%>
</br>

</br>
- Created a new axios request to insert query strings to the URL in the request (string interpolation), so that data from the server can be porperly filtered/sorted/searched by the front-end.
</br>
</br>
- Modified the useEffect hook dependency array in the JOBS CONTAINER to contain the state values from the search container form, so that the fetch request, getJobs(), will be resent whenever the form values change (might change this to a search button instead to reduce the number of requests).
</br>
</br>

```js
const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs, search, searchStatus, searchType, sort } = useAppContext()
  useEffect(() => {
    getJobs()
  }, [search, searchStatus, searchType, sort])
  ...
```
</br>
<img src="https://user-images.githubusercontent.com/91037796/188350532-6f7d3d6d-4353-4fd8-8e35-adec91fcc192.png" width=80% height=80%>
</br>




</br>
</br>
<h2>Pagination - Server (Back End)</h2>
</br>

</br>
- Added to the jobs controller variables to add to the query URL parameters to skip a certain number of MongoDB documents and determine how many pages will be displayed for the numbers of jobs (this is updated when a user searches or filters for jobs).
</br>
</br>


```js
jobsController.js

    //PAGINATION
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit

    //skip will skip a # of docs starting w/ 1st: https://www.mongodb.com/docs/manual/reference/operator/aggregation/skip/
    //limit will limit how many docs are returned by the query
    result = result.skip(skip).limit(limit)   


    //now we add await
    const jobs = await result

    const totalJobs = await Job.countDocuments(queryObject)     //number of docs
    const numOfPages = Math.ceil(totalJobs / limit)             //return largest int

    res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages })
```

</br>



</br>
</br>
<h2>Pagination - Front End</h2>
</br>

</br>
- Added a page button container that dynamically displays a number of page buttons depending on the length of jobs returned.  A state value keeps track of the active page with a variable and uses a dynamic class name to conditionally highlight the active page button.  Also added next/previous buttons that will dispatch a function to update this state value. 
</br>

</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/188500693-5e721426-670a-410e-9d20-0780b6d02c00.gif" width=60% height=60%>
</br>



</br>

```js
PageBtnContainer.js

        <Wrapper>
        <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
        </button>
        <div className="btn-container">
            {pages.map((pageNumber) =>{
                return <button 
                type="button" 
                className={pageNumber === page? 'pageBtn active' : 'pageBtn'} 
                key={pageNumber} 
                onClick={ ()=> changePage(pageNumber) } >
                    {pageNumber}
                </button>
            })}
        </div>
        <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
        </button>
        </Wrapper>
```

</br>

</br>
- Modified the jobs container dependency array so that jobs displayed will re-render and the fetch request to the server will be remade if the page changes. 
</br>
</br>


</br>
<img src="https://user-images.githubusercontent.com/91037796/188499955-0fcd98b8-929e-4085-8b5b-f8f46bafc0ff.gif" width=80% height=80%>
</br>


</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/188500340-da900675-7bf7-40b9-8417-ca83b4744de9.gif" width=60% height=60%>
</br>



```js
const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs, search, searchStatus, searchType, sort, numOfPages } = useAppContext()
  useEffect(() => {
    getJobs()
  }, [search, searchStatus, searchType, sort, page])

```



</br>
</br>
<h2>Deploying the Application</h2>
</br>

</br>
- Added a script in the package.json file on the server to be run with the command "npm run build-client" to build the front-end application for deployment to production.  This adds the "build" folder to the client, which contains the application.
</br>

</br>

```js
"scripts": {
    "build-client": "cd client && npm run build",
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client \""
  },
```


</br>


</br>
- Modified the server.js file so that paths for importing now direct to the client/build folder.  Also modfied all GET routes that are not for authentications or jobs to route to index.html  
</br>
</br>
</br>


```js
Server.js 

/**********ONLY FOR DEPLOYING THE APPLICATION**********/

//these three imports for deploying to production
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

// only when ready to deploy
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './client/build')))


//directs EVERY get route to the index.html after the auth and jobs route.  needs to be after app.use for other two so we try those first
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})
```

</br>
</br>
- Added security npm packages to the application on Server.js.  This includes packages such as "Helmet" to secure Express apps by setting HTTP headers, "xss-clean" as node.js middleware to sanitize user input, and "express-mongo-sanitize" to prevent MongoDB operator injection.
</br>
</br>

```js
Server.js

/**********ONLY FOR DEPLOYING THE APPLICATION**********/
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

```

</br>
</br>
- Added the express middleware package "express-rate-limit" to limit the number of requests allowed for a specific IP address in the authRoutes.js file.  Added to the login and register routes.  Deviated from the tutorial by also adding this to the Server.js file so it impacts all routes, not just specific routes, but allowed for more requests for the server version.
</br>
</br>

```js
authRoutes.js

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,   // 15 minutes
  max: 10,                    // max # of requests from that IP
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
```


</br>
</br>
- Deployed application to Heroku by creating an account and installing the Heroku CLI.
</br>
</br>



</br>
<img src="" width=80% height=80%>
</br>
