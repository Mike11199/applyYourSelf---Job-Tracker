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
        <br /><strong>Normalize.css</strong>
    </td>
    <td align="center" height="5" width="60">
        <br /><strong>JSONWebToken</strong>
    </td>
    <td align="center" height="5" width="60">
        <br /><strong>BcryptJS</strong>
    </td>
    <td align="center" height="5" width="60">
        <br /><strong>Axios</strong>
    </td>
    <td align="center" height="5" width="60">
        <br /><strong>Cors</strong>
    </td>
    </tr>
    <tr>
    <td align="center" height="5" width="60">
        <br /><strong>Concurrently</strong>
    </td>
    <td align="center" height="5" width="60">
        <br /><strong>Morgan</strong>
    </td>
    <td align="center" height="5" width="200">
        <br /><strong>ExpressJS Async Errors</strong>
    </td>
    <td align="center" height="5" width="200">
        <br /><strong>React Icons</strong>
    </td>
    <td align="center" height="5" width="200">
    <br /><strong>Moment.js</strong>
    </td>
    </tr>
</table>



</br>

<h2>Project Implementations</h2>

-Used NPM to install the NORMALIZE.CSS package.  This allows for normalized CSS to provide cross browser consistency, prevent name collisions, and allow stylizing of entire react components using wrappers.  Is a fancier way of * { } to add a global for CSS elements.  

-Added styled components using wrappers in the wrappers folder.  This involves importing 'styled-components', and adding CSS directly to a .js file.  This is then imported into React components such as the landing page, so that the CSS is more modular.   

-Used React Router to allow for the website to be a multi-page application.  Set up routes for if user is logged in, a registration page, a landing page, and a catch all error page for URLs not defined.

-Added an isMember function to toggle FormRow components on the login/register screen. Utilized conditional rendering with inline ternarny operators (as oppossed to if/else statements) to display different form fields if the user is already registered and can log in, or needs to register.

-Set up a global context using createContext and a useContext hook to pass values deep into the component tree.  This allows the alert function to be used globally as oppossed to passed to each prop.



<img src="https://user-images.githubusercontent.com/91037796/171723508-c90523fd-f41f-4338-a6f5-f372adc5fc66.png" width=55% height=55%>


-Used a reducer (a function that take the current state and an action as arguments, and return a new state result) and dispatch functions to enable alerts to show and clear after a brief period of time (user not inputting all values into the form, etc.)


<img src="https://user-images.githubusercontent.com/91037796/171750486-4053e32c-028b-4690-9281-7f4e01e18475.png" width=40% height=40%>
<img src="https://user-images.githubusercontent.com/91037796/183761215-bddbbed4-a33d-42d6-8441-f5c92cb35c0e.png" width=40% height=40%>

</br>
<h2>Routing and API Testing</h2>

-Used Postman to test APIs and express routes for user authentication and connecting to the MongoDB database:
</br>
<img src="https://user-images.githubusercontent.com/91037796/183325705-55763bc2-b43c-4a8e-979b-8e4235bf6c1e.png" width=100% height=100%>


</br>
<h2>MongoDB Implementation</h2>

-Created a user model with Mongoose schema for use with MongoDB.  Used a validator package from npm to validate the email.  Ensured the email is unique with the "unique: true" property in the userSchema, and used the error handler to display a message if the email field is not unique (already in the MongoDB database).

<img src="https://user-images.githubusercontent.com/91037796/178848537-40aae12d-bdfa-48e5-9989-2e555298968b.png" width=50% height=50%>

-Implemented password hashing in MongoDB with npm package BCRYPTJS to protect user data in the event the databse information was ever compromised by a malicious party. Also used npm to install packages such as express-async-errors  to avoid numerous try/catch statements for controllers, and http-status-codes to prevent hard coding of status codes.  


<img src="https://user-images.githubusercontent.com/91037796/183325614-c074d5f1-ce97-422f-a2ba-c98fb3eaa92b.png" width=70% height=70%>
<img src="https://user-images.githubusercontent.com/91037796/183319400-f7021d38-2803-4d15-8717-6fb85a86077e.png" width=50% height=50%>


-Implemented JSON Web Token (JWT) using npm package JSONWEBTOKEN for user authentication and to prevent unauthorized users from accessing pages.

```js
userSchema.methods.createJWT = function () {
    return jwt.sign({userId:this._id}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
}
```

</br>
<h2>Connecting the Front and Back End</h2>

-Used npm to install the package CONCURRENTLY so that the front and back end of the application can be ran at the same time with the "npm start" terminal command.  Made use of the npm node.js package CORS to allow for a Connect/Express middleware that can be used to enable CORS (cross-origin resource sharing) between different domains, allowing for the server and front-end to communicate with each other.


<img src="https://user-images.githubusercontent.com/91037796/183781631-d8519c74-f66c-4adf-a9ff-69eaefaa4ca8.png" width=90% height=90%>
</br>
<img src="https://user-images.githubusercontent.com/91037796/183328759-5d8a11d8-3389-4ab9-a158-9a0a3d729d1e.png" width=60% height=60%>

</br>
<h2>Implementing User Registration (Front/Back End and MongoDB)</h2>

<h3>Front End</h3>
-Installed AXIOS on the client side so that when the submit button is clicked on the front-end, axios will submit a post request using the authentication routes on the back-end to the MongoDB database.  If the user already exists (looking up by email in the database using the fineOne function), an error will be returned.    
</br>
</br>
 Register Page - Register.js 
</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/183775574-2038d97e-de5d-4671-b414-03c94062e9a5.png" width=50% height=50%>
</br>
appContext - appContext.js 
</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/183775134-5d5df73e-d50d-4ef0-a9db-fc038ec4e18a.png" width=50% height=50%>
</br>

<h3>Back End</h3>

Authentication Page - authController.js
</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/183775472-97bf5927-ece8-4902-bff0-4acf16cd61bf.png" width=50% height=50%>



</br>
<h2>useNavigate and User Persistence in Local Storage</h2>

-8/9/22 Implemented the useNavigate hook to navigate programmatically to the dashboard after the registration form is submitted.
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

-8/9/22 We also have to persist the user in local storage as the user will be logged out if they do not exist.  To do this, added functions to add and remove the user from local storage to appContext.js.  This is the file where context, or global react variables are stored.  Also saved the token itself to local storage.  
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
<h2>Login User - Server (Back End)</h2>
</br>
-8/12/22 Installed the npm package MORGAN on the server side as an HTTP request logger middleware, to log HTTP requests, debug APIs used in the application, and help view routes/methods used in controllers.  This will make the program easier to use as multiple routes to send requests are added. After installing, terminal shows the 400 bad request error tested in Postman when attempting to register an email that is already in the MongoDB database.
</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/184403310-505e642f-73e5-4157-a749-7e763601240e.png" width=100% height=100%>

</br>
-8/12/22 Implemented user authentication by first setting up a new error to return 401 if unauthenticated.
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
-8/12/22 After adding the custom error, added an instance method to the user schema to compare password to the hashed password and return 'True' if it matches.
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
-8/12/22 Then set up the LOG IN CONTROLLER server side in the authController.js file.  This checks that an email and password is entered.  Looks up the user by email in the MongoDB database, and confirms the password entered matches the hashed version of the password in the database.  If everything is correct, it returns a JSON response of the user object (not the password entered), token, and location.
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


-8/12/22 Set up a login user async function and added form input to the appContext state to be accessed as a global.


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
-8/12/22 Added line to the if/else statement for the onSubmit action, in the Register.js file, so that the loginUser function in the appContext.js file is invoked if the login form is submitted.  If the user isn't already a member, then the registerUser will be ran.
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

-8/24/22 Set up a nested page structure by using a shared layout, made possible by the Outlet component in React BrowserRouter.
</br>
</br>

-8/24/22 Added protected routes to the application so that a user needs to be registered to access certain pages, or else they will be kicked back to the landing page.  This is accomplished by a function which accesses the user object (through the AppContext global state).  The function then returns the user to the landing page programatically if they are not a user, using the navigate hook.
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
-8/25/22 Set up more components for the page structure.  Added a toggleSidebar to application state with useAppContext().  Added button to show/hide div for log out button using React's useState hook.
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

</br>
-8/26/22 Added a function in appContext to log out the user, by clearing the user's local storage and setting state values back to null.  Due to the fact that routes are protected, this will also automatically kick the user back to the landing page.
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

</br>
-8/28/22 Restricted access to certain resources so that a user can view only their own data by adding an authentication mdidleware, that checks for the existence of a JSON web token created for the user.
</br>
</br>

-8/28/22 First added the "authenticateUser" to the /updateUser route.  /register and /login are still public routes.  Also added authentication to all routes for creating, updating, and deleting jobs.  Added bearer token testing in Postman to test routes with authentication bearer token.


-8/28/22 Created auth.js middleware to also compare the user's JWT to the secret environment variable, throwing an UnAuthenticationError 401 if the token is not correct or has expired.
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

</br>
-8/29/22 Added a function called <strong>updateUser</strong> in appContext.js on the FRONT END.  This is called by the save changes button on the dashboard profile page, and makes use of the auth route "router.route('/updateUser').patch(authenticateUser, updateUser)" to send an HTTP PATCH request to the Node.JS back end.   
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
-8/29/22 On the back end, the updateUser function in the authController.js file retrieves the user from the MongoDB database by userID, and updates values as needed.  This request also goes through the authentication middleware to ensure the jwt token is valid before this request to the server and database can be processed.
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
-8/29/22 Lastly, the reducer updates state as needed based on the result of the HTTP request.
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
-8/30/22 Added controller in server (back-end) to get the requested data from the job model in the MongoDB database. 
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
-8/30/22 Added job model using Mongoose for MongoDB so that created jobs can be stored in the database.  Jobs have a unique ID for the job itself and the user who created it (needed for the user to retrieve and edit/delete jobs later on).
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
-8/31/22 In the front-end, in AppContext.js, created an async function to createjob and post an axios request to the server with the correct authentication (bearer token). Request uses state values that will be updated by the add job form.
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
-8/31/22 On the front-end added button to invoke the createJob function in appContext.  Also added form fields and drop downs for job info, and actions to pass to the reducer to update state values on create job begin, success, or error.
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






</br>
-8/31/22 Added get all jobs controller in server (back-end) to get ALL JOBS for a user, looking up by user ID in the jobs table in MongoDB. Tested in Postman with bearer token.
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
-8/30/22 Added front end function axios request with interceptor (bearer token) to the /jobs API to retrieve jobs in an array, which will be used to render jobs on the jobs page.
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
-8/31/22 Add jobs and jobcontainer components to the front end page, wrapper for styled components, to display jobs.
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
-8/31/22 Finished Job and JobsContainer components.  Used npm package MOMENT to convert unix time to a date.  Added icons for each job card.  Imported wrappers for CSS created by the tutorial.
</br>
</br>
<img src="https://user-images.githubusercontent.com/91037796/187825939-fbcfe139-00d5-46e5-90df-b7ee2c53a1a6.png" width=100% height=100%>


</br>
</br>
<h2>Edit Job Functionality - Front End State</h2>
</br>


</br>
-8/31/22 Set up the "edit job" functionality.  When clicking an "Edit" button on one of the job cards, it invokes the "setEditJob" function in appContext.js, passing the job id from the state into it.  
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
-8/31/22 The "setEditJob" function then dispatches an action which the reducer uses to set the state variable "isEditing" to "true".  The user is programatically navigated to the Add Job which is set to an "edit job" form, using conditional rendering on the form based on the "isEditing" variable.  Instead of passing values into the function here, we just grab all the job info that is already in the state for the job id we are editing.  This is because when we retrieved all jobs for a user, we already have each job in the state in our "jobs array".
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
-8/31/22 Set up jobs controller "updateJob" async function.  Uses "findOne" Mongoose function to find a job by ID, and then the "findOneAndUpdate" Mongoose function to update the job, looking up by ID, with the req.body new values passed into it.  This allows us to edit existing jobs in the MongoDB database from the server.
</br>
</br>

</br>
-8/31/22 Tested in Postman by using the "Job ID" in the URL for the API.
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
-8/31/22 Added functionality to check permissions so that users can only edit their OWN jobs, and NOT the jobs of other users in the updateJob function in the jobs controller.
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
-8/31/22 Postman test (screenshot above) throws a 401 unauthorized error on the server, as the user does not have permission to access this API (URL contains Job ID), showing that the checkPermissions function worked as intended.
</br>

<img src="https://user-images.githubusercontent.com/91037796/187835984-4732db2b-23b2-4396-8684-8291b0331ac7.png" width=60% height=60%>





</br>
</br>
<h2>Delete Job Functionality - Server</h2>
</br>


</br>
-8/31/22 Added function to deleteJob on the server, jobs Controller.
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
-8/31/22 Tested API in Postman.  Received 200 success code with deleting a user's job, and 401 if unauthorized as expected.
</br>

<img src="https://user-images.githubusercontent.com/91037796/187838014-09587109-a011-4ca2-9866-21c16b00f758.png" width=60% height=60%>
</br>
<img src="https://user-images.githubusercontent.com/91037796/187838037-d1909253-a54c-4a44-828e-e07e2b8e0d43.png" width=60% height=60%>



