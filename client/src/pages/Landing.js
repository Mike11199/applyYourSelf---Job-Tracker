import main from '../assets/images/landing_page_image.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
        {/* info */}
        <div className="info">
            <h1>
                job <span>tracking</span> app
            </h1>
            <p>
            "When things may start to seem overwhelming, it pays to be organized."
            </p>
            <p>
            "Track all of your job applications in one place with this simple web application."
            </p>
            <Link to='/register' className='btn btn-hero'>
                Login/Register
            </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
    </div>
  </Wrapper>
  )
}


export default Landing
