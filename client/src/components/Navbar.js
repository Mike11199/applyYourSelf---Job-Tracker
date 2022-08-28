import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from "../context/appContext"
import Logo from './Logo'
import { useState } from "react"

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)              //square brackets is computed property name
  const {toggleSidebar, logoutUser, user} = useAppContext()                         
  return (
    <Wrapper>
      <div className="nav-center">
      <button 
        type="button" 
        className="toggle-btn" 
        onClick={toggleSidebar}
      >
        <FaAlignLeft />
      </button>
      <div>
        <Logo/>
        <h3 className="logo-text">
          dashboard
        </h3>
      </div>

      </div>
      <div className="btn-container">
        <button 
          type="button"  
          className="btn" 
          onClick={()=> setShowLogout(!showLogout)}
          // above line invokes function when button is clicked to show the drop down for user log out
        >
        <FaUserCircle/>
        {user?.name}
        <FaCaretDown/>
        </button>
        <div className={showLogout?"dropdown show-dropdown" : "dropdown"}> 
        {/* above uses conditional class name to trigger different css for drop down box */}
          <button type="button" className="dropdown-btn" onClick={logoutUser}>logout</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar