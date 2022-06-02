import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const Landing = () => {
  return (
  <Wrapper>
    <nav>
     <img src={logo} alt="applyYourSelf" className='logo' />
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

// insert styled component wrapper here.  Calling it main as that's the tag over 

const Wrapper = styled.main`

nav {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}

.page {
  min-height: calc(100vh - var(--nav-height));
  display:grid;
  align-items:center;
  margin-top: -3rem;
}

h1{
  font-weight: 700;
  span{
    color:var(--primary-500);
  }
}

p{
  color: var(--grey-600);
}
.main-img {
  display: none;
}

@media (min-width: 992px) {
  .page {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
    display: block;
  }
}
`


export default Landing
