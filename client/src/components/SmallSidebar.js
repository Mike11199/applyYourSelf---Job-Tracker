import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from "../context/appContext"

import LogoCopy from "./LogoCopy"
import NavLinks from "./NavLinks"

const SmallSidebar = () => {
  const {showSidebar, toggleSidebar, darkMode} = useAppContext()
  return (
    <Wrapper>
      <div
        className={darkMode ? 'dark-wrapper' : 'light-wrapper'}
      >
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className={darkMode ? 'dark-content' : 'content'}>
          <button 
              type="button" 
              className="close-btn" 
              onClick={toggleSidebar}> 
            <FaTimes />
          </button>
          <header>
            <LogoCopy />
          </header>
        <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar