import { Outlet} from "react-router-dom"
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, SmallSidebar, BigSidebar } from '../../components'


// wrapper comes from shared layout
// handled by css in wrappers: BigSidebar is shown if screen size large, show SmallSidebar if screen size is mobile
export const SharedLayout = () => {
    return (
    <Wrapper>  
      <main className="dashboard">
      
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