
import { useEffect, useState} from "react"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAppContext } from "../context/appContext";





const MyGoogleLogInButton = () => {


  const {googleLogin} = useAppContext()  
const onSuccess = (res) => {

  let token = res.credential
  googleLogin(token)
  console.log("Login Success from the Google Side! Current user: ", res)
}

const onFailure = (res) => {
  console.log("Login Failed! res: ", res)
}


return (


  

<div style={{width:"100%", justifyContent:"center", width:"100%", display:"flex"}}>
  
<GoogleOAuthProvider  clientId="421793135719-tbnlgi65j46cc3oo2j74eot1ou5tg06n.apps.googleusercontent.com">
  <GoogleLogin
      
    

      width= "max"     
      buttonText="Login"
      theme="filled_black"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      className='googleButton'      
      isSignedIn={true}
  />

</GoogleOAuthProvider>

</div>

      




)


}


export default MyGoogleLogInButton