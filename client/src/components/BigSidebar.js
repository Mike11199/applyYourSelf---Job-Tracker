import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import LogoCopy from '../components/LogoCopy'
import Wrapper from '../assets/wrappers/BigSidebar'

const BigSidebar = () => {
  const { showSidebar, darkMode} = useAppContext()


const getSideBarStatus = () => {
  if (showSidebar && darkMode) return 'sidebar-container dark-sidebar'
  else if (showSidebar &&! darkMode) return 'sidebar-container show-sidebar'
  else if (!showSidebar) return 'sidebar-container'
}

  return (
    <Wrapper>
      <div
        className={
          getSideBarStatus()
        }
      >
        <div className='content'>
          <header>
            <LogoCopy />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
