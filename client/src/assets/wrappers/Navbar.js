import styled from 'styled-components'

const Wrapper = styled.nav`
  



  .logo {
    display: flex;
    align-items: center;
    width: 250px;    
    padding-top: 20px;
  }

  .nav-center {
    display: block;
    align-items: center;
    justify-content: space-between;    
    background: var(--white);
    height: 250px;
    border-bottom: 1px solid black
  }

  .nav-center-dark {
    display: block;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: white;  
    height: 250px;
  }

  .logo-container {
    display: flex;
    margin: 0px;
    padding: 0px;
    align-items: center;
    justify-content: center;
  }

  .btn-container {    
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 20px;
    outline: none;
  }

  .btn-container-toggle {    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    margin-right: 20px;
    outline: none;
  }

  .btn {    
    display: flex;    
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .btn_light {  
    border-radius: 5px; 
    outline: none;
    height:35px;      
    display: flex;    
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    position: relative;
    box-shadow: var(--shadow-2);
    color: black;    
    background-color: white;
  }

  .btn_dark {    
    border-radius: 5px;
    outline: none;
    height:35px;      
    display: flex;    
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    position: relative;
    box-shadow: var(--shadow-2);
    color: white;    
    background-color: black;
  }

  .dropdown {    
    background: var(--primary-100);
    box-shadow: var(--shadow-2);    
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);   
    position: fixed;
    
  }
  .dropdown-btn { 
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer; 
    width: 125px;    
    height: 45px;    
  }

  .show-dropdown {    
    visibility: visible;            
    margin-top: 30px;        
    display: block;
  }



  .logo-text {
    display: none;
    margin: 0;
  }


  .toggle-btn {    
    margin: 0px;
    display: flex;
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    outline: none;
  }


  @media (min-width: 992px) {
    
    top: 0;
    height: var(--nav-height);
    
    
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;    
    background: var(--white);
    height: 100px;
  }

  .nav-center-dark {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;  
    height: 100px;  
  }

  .btn-container {
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;    
    outline: none;
    
  }

  .btn-container-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
  }

  .toggle-btn {    
    margin: 0px;
    display: flex;
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    outline: none;
  }


  .dropdown {         
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    }

  .show-dropdown {    
    visibility: visible;            
    margin-top: 30px;        
    display: block;
  }

  .dropdown-btn { 
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer; 
  }

  .logo {
    display: none;
    width: 250px;      
  }

  .logo-text {      
    display: flex;
    align-content: center;
    align-self: center;
  }

  .logo-container {
    display: flex;    
    margin-right: auto;
    margin-left: auto;    
    align-items: center;
    justify-content: center;
  }

  .btn {            
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }
  


  }
`
export default Wrapper
