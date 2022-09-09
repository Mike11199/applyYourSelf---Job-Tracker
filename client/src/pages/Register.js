import { useState } from 'react'
import { useEffect } from 'react'
import {Logo, FormRow, Alert, MyCustomButton} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import {  FacebookLoginButton  } from 'react-social-login-buttons'
// import { GoogleLogin, GoogleLogout  } from 'react-google-login'
import { GoogleOAuthProvider } from '@react-oauth/google';




// create the object here
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}

const responseGoogle = (response) => {
    console.log(response);
  }



const Register = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)    

    //these values are grabbed from the app context
    //Context provides a way to pass data through the component tree without having to pass props down manually at every level.
    //It in effect creates "global" variables for a tree of react components - Source:  https://reactjs.org/docs/context.html
    const {user, isLoading, showAlert, displayAlert, registerUser, loginUser} = useAppContext()  
 

// ... is the spread operator
const toggleMember = ()=>{
    setValues({...values,isMember:!values.isMember})
}  

//this updates the object with states when a user is typing into the input form
const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value})
}


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

//if the user exists, if the user or navigate changes, wait 3 seconds, then navigate user to the dashboard page
useEffect(()=>{
    if (user) {
        setTimeout(()=> {
           navigate('/')
        }, 3000)
    }
}, [user, navigate] ) //dependency array.  invoked every time the user or navigate values change


return (

    <Wrapper className='full-page'>
       
        <form className='form' onSubmit={onSubmit}>
            <Logo />
            {/*? is the conditional (ternary) operator */}
            <h3>{values.isMember ? 'Login':'Register'}</h3>
            {showAlert && <Alert />}

            {/* name input */}
            {!values.isMember && (
                <FormRow 
                type ="text" 
                name="name"
                values={values.name}
                handleChange={handleChange}
                />
            )}


            {/* email input */}
            <FormRow 
                type ="email" 
                name="email"
                values={values.email}
                handleChange={handleChange}
            />

            {/* password input */}
            <FormRow 
                type ="password" 
                name="password"
                values={values.password}
                handleChange={handleChange}
            />
            
        {/* If isLoading, disable the Submit button */}
        <button type="submit" className='btn btn-block'
        disabled={isLoading}>
            Submit
        </button>
        <p>
        <br></br>
        {values.isMember? 'Not a member yet?':'Already a member?'}
            <button type ="button" onClick={toggleMember}
            className="member-btn">
                {values.isMember? 'Register' : 'Login'}
            </button>

        </p>

        <br></br>
        {/* <GoogleLoginButton onClick={() => alert("Hello")} /> */}
        <FacebookLoginButton onClick={() => console.log("Still in Development!")} style={{width:"100%", margin:"0px"}}/>
        <br></br>
        <GoogleOAuthProvider clientId="421793135719-tbnlgi65j46cc3oo2j74eot1ou5tg06n.apps.googleusercontent.com">

        {/* <GoogleLogin
            
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className='googleButton'      
        />
        <br></br> */}
        <MyCustomButton />
            



        </GoogleOAuthProvider>
        

        </form>
        
    </Wrapper>
    )
}

export default Register