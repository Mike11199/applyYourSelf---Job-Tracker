
import links from "../utils/links"
import { NavLink } from "react-router-dom"
import { useAppContext } from "../context/appContext"


const NavLinks = ({toggleSidebar}) => {
  const {darkMode} = useAppContext()     
  return (
    <div className="nav-links">
    {links.map((link)=>{
        const {text, path, id, icon} = link
        return (
        <NavLink             
            to={path}
            end 
            key={id} 
            onClick={toggleSidebar}           
            className={({isActive})=> 
            {
              if (isActive && darkMode) return 'nav-link-dark active'
              if (isActive && !darkMode) return 'nav-link active'
              if (!isActive && darkMode) return 'nav-link-dark'
              if (!isActive && !darkMode) return 'nav-link'              
            }
        }
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
  
        )
    })}
  </div>
  )
}

export default NavLinks