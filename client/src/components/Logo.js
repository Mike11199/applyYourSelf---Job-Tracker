import logo_light from '../assets/images/new_logo_light.png'
import logo_dark from '../assets/images/new_logo_dark.png'
import { useAppContext } from '../context/appContext'

const Logo = () => {
    const {darkMode} = useAppContext()
    return <img src={darkMode ? logo_dark : logo_light} alt="applyYourSelf" className='logo' />
}

export default Logo