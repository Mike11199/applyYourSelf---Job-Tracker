import logo_light2 from '../assets/images/new_logo_light_2.png'
import logo_dark from '../assets/images/new_logo_dark.png'
import { useAppContext } from '../context/appContext'

const LogoCopy = () => {
    const {darkMode} = useAppContext()
    return <img src={darkMode ? logo_dark : logo_light2} alt="applyYourSelf" className='logo' />
}

export default LogoCopy