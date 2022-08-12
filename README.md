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
    <td align="center" height="5" width="60">
        <br /><strong>Concurrently</strong>
    </td>
    <td align="center" height="5" width="60">
        <br /><strong>Morgan</strong>
    </td>
    <td align="center" height="5" width="200">
        <br /><strong>ExpressJS Async Errors</strong>
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



<img src="https://user-images.githubusercontent.com/91037796/171723508-c90523fd-f41f-4338-a6f5-f372adc5fc66.png" width=40% height=40%>


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
<h2>Login User - Server and Front End</h2>
</br></br>

-8/12/22 Installed the npm package MORGAN on the server side as an HTTP request logger middleware, to log HTTP requests, debug APIs used in the application, and help view routes/methods used in controllers.  This will make the program easier to use as multiple routes to send requests are added. After installing, terminal shows the 400 bad request error tested in Postman when attempting to register an email that is already in the MongoDB database.
</br>

![image](https://user-images.githubusercontent.com/91037796/184403310-505e642f-73e5-4157-a749-7e763601240e.png)

</br>
-8/12/22 Implemented user authentication by first setting up a new error to return 401 if unauthenticated.

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
-8/12/22 After adding the custom error, 

```js
Server Side:
User.js

//instance method
userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}
```
