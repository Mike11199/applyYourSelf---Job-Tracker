

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

.googleButton2 {
  background: #000000;
  flex-direction: row;
  color: white;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
}

.googleButton2:hover {
  box-shadow: var(--shadow-4);
  
  
}

.googleButton2:active {
    /* width: 99%;
    height: 99%;
    margin-right: auto;s
    margin-left: auto; */
    transform: scale(.98, 0.98);
    
}

.googleLogo {
display: flex;
height: 40px;
width: 40px;

}

.googleText {
  display:flex;
  
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

  @media (max-width: 360px) { 

    .googleButton2 {
    background: black;
    flex-direction: row;
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
  
}

  }

`
export default Wrapper
