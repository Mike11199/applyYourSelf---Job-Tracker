import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'

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
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui 
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
            rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
            facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus 
            saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
            repellat."
            </p>
            <button className='btn btn-hero'>
                Login/Register
            </button>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
    </div>
  </Wrapper>
  )
}


export default Landing
