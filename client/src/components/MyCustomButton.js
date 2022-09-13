import { useGoogleLogin } from '@react-oauth/google';
import googleLogo from '../assets/images/google.png'
import Wrapper from '../assets/wrappers/MyGoogleButton'


const MyCustomButton = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      })

    return (    

                <button 
                        className="googleButton2"
                        type="button" 
                        // id="googleButton2"
                        // style={{width: '100%', 
                        //         backgroundColor:"black", 
                        //         color: 'white', 
                        //         height:"55px", 
                        //         display:'flex', 
                        //         alignSelf:"center", 
                        //         alignItems:"center",
                        //         border: "0px solid black",
                                
                        //     }} 
                        onClick={() => login()}
                        >
                            
                            <img className="googleLogo" 
                                 width="50px" 
                                 height="50px" 
                                 src={googleLogo} 
                                 alt="applyYourSelf"  
                                //  style={{
                                //         display: 'flex', 
                                //         marginRight:"30px",
                                //         marginLeft:"10px",

                                //         }}
                                />
                        <div>Sign in with Google &nbsp; &nbsp;     </div>                
                        
                </button>          

            )

    }

export default MyCustomButton
