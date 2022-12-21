import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from "../context/appContext"
import LogoCopy from './LogoCopy'
import { useState } from "react"

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)              //square brackets is computed property name
  const {toggleSidebar, logoutUser, user, showSidebar, darkMode, toggleDarkMode} = useAppContext()                         
  return (
    <Wrapper>
      <div className='wrapper'>
      <div className={darkMode ? 'nav-center-dark' : 'nav-center'}>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div className ='logo-container'>
          <LogoCopy />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className={showSidebar ?'btn-container-toggle':'btn-container'  }>
          <button type='button' className={darkMode ? 'btn_light' : 'btn_dark'} onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <div>
            <button
              type='button'
              className='btn'
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle />
              {user?.name}
              <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button type='button' className='dropdown-btn' onClick={logoutUser}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

export default Navbar