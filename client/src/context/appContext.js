import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import axios from 'axios'

import { 
  DISPLAY_ALERT, 
  CLEAR_ALERT, 
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actions"

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user:user ? JSON.parse(user) : null,         //ternary operator:  fancy single-line if/else statement
  token:null,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState)   //https://reactjs.org/docs/hooks-reference.html  alternative to useState

const displayAlert = () => {
    dispatch({type:DISPLAY_ALERT})    //arrow function that invokes func with object literal as parameters 
    clearAlert()
}

const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  }


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


  return (
    <AppContext.Provider value={{...state, displayAlert, registerUser, loginUser}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }