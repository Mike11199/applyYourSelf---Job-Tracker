import { Outlet} from "react-router-dom"
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, SmallSidebar, BigSidebar } from '../../components'
import { useAppContext } from "../../context/appContext"

// wrapper comes from shared layout
// handled by css in wrappers: BigSidebar is shown if screen size large, show SmallSidebar if screen size is mobile
export const SharedLayout = () => {
    const {darkMode} = useAppContext()       
    return (
    <Wrapper>  
      <main className={darkMode ? 'dashboard-dark' : 'dashboard'}>
      
  <SmallSidebar/>
  <BigSidebar/>
      <div>
        <Navbar/>
        <div className="dashboard-page">
           <Outlet />
        </div>
      </div>
      </main>
    </Wrapper>
    )
  }
  
  export default SharedLayout