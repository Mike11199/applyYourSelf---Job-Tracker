

import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`;



const Wrapper = styled.section`
  display: grid;
  align-items: center;
  
  body {
   margin: 0;
   padding: 0;
}

  .logo {
  display: block;
  align-items: center;
  align-self: center;
  margin: 0px 0px 0px 0px;
  padding: 0;
  width: 250px;
  margin-bottom: 1.38rem;
  border: 0;
}
.form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    animation-iteration-count: 2;
    animation: 2s, 2s ${fadeInAnimation};
  }


  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  
  @media (min-width: 992px) { 
  
  .logo {
    display: block;
    margin: 0 auto;
    width: 300px;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    animation-iteration-count: 2;
    animation: 2s, 2s ${fadeInAnimation};
  }


  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  }
`
export default Wrapper
