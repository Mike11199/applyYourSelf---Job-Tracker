import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'

const slideInLeftAnimation = keyframes`${slideInLeft}`;


const Wrapper = styled.main`

  .btn-hero {
    font-size: 1.25rem;
    padding: 0.5rem 1.25rem;
    animation: 1s, 1s ${slideInLeftAnimation};
    align-self: center;
    justify-content: center;
    display: flex;
    }

  .logo {
      padding-top: 100px;      
      display: flex;
      align-items: center;
      align-self: center;
      width: 300px;    

    }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin-left: auto;
    padding-left:40px;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
    
  }
  h1 {
    padding-top: 150px;   
    font-weight: 200;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    padding-top: 40px;
    margin-top: 10px;
    display: block;
  }

  @media (min-width: 992px) {
   
    nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: 37%;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
   
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      padding-top: 300px;
    }
    .logo {
       
      display: flex;

      width: 400px;    

    }

    .btn-hero {
    font-size: 1.25rem;
    padding: 0.5rem 1.25rem;
    animation: 1s, 1s ${slideInLeftAnimation};
    align-self: center;
    justify-content: left;
    width: 200px;
    display: block;
    }

    h1 {
    padding-top: 20px;
    font-weight: 200;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    span {
      color: var(--primary-500);
    }
  }


  }
`
export default Wrapper
