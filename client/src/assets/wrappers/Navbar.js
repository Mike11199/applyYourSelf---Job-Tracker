import styled from 'styled-components'

const Wrapper = styled.nav`
  
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  
  .logo {
    display: flex;
    align-items: center;
    width: 250px;    
    padding-top: 20px;
  }
  .nav-center {
    display: block;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    
    background: transparent;
    border-color: transparent;
    margin-left: auto;
    margin-right: auto;
    
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-right: 0px;
    display: flex;
    align-items: center;
    align-self: center;
  }
  background: var(--white);
 

  .logo-container {
    display: flex;
    margin: 0px;
    padding: 0px;

    align-items: center;
    justify-content: center;
  }



  .btn-container {
    display: flex;


    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

  }
  .btn-container-toggle {
    display: flex;


    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

  }

  

  .btn {    
    display: flex;
    top: 20px;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    margin-top: 250px;
    visibility: visible;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;

  }
  .dropdown-btn {
    background: transparent;
    width: 200px;
    position: relative;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }




  @media (min-width: 992px) {
    
    top: 0;
    height: var(--nav-height);

  .nav-center {
    

    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  .btn-container {

    position: relative;
    top: 0px;    

    margin-right: 8%;
    justify-content: center;
  }

  .btn-container-toggle {

    position: relative;
    top: 0px;    
    margin-right: 0%;
    margin-bottom: 2%;
    justify-content: center;
}

  .toggle-btn {
    position: relative;   //delete to center
    margin: 0px;
    

    display: flex;
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;

   
    
  }


  .dropdown {
     
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    position: absolute;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    align-items: center;
    align-self: center;
  }
  .show-dropdown {
    margin-top: 50px;
    margin-right: 20%;
    top: 10px;    
    width: 130px;
    height: 50px;
    visibility: visible;
    position: absolute


  }



  .dropdown-btn {
    position: absolute;    
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    align-items: center;
    align-self: center;
    
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
    padding-left: 320px;
    align-items: center;
    justify-content: center;

    }

    .btn {    

    display: flex;
    top: 20px;    
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);

  }

  .btn-container {

    
    position: relative;
    display: flex;


    margin-bottom: 2%;


  }


  }
`
export default Wrapper
