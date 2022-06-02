import {useState, useEffect} from 'react' 
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'


// create the object here
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}


const Register = () => {
    const [values,setValues] = useState(initialState)
    //global state and useNavigate
    const {isLoading, showAlert} = useAppContext()
 

// ... is the spread operator
const toggleMember = ()=>{
    setValues({...values,isMember:!values.isMember})
}  


const handleChange = (e) => {
    console.log(e.target)
}

const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
}
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
            
            
        <button type="submit" className='btn btn-block'>
            Submit
        </button>
        <p>
        {values.isMember? 'Not a member yet?':'Already a member?'}
            <button type ="button" onClick={toggleMember}
            className="member-btn">
                {values.isMember? 'Register' : 'Login'}
            </button>

        </p>
        </form>
    </Wrapper>
    )
}

export default Register