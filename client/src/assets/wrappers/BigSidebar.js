import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .logo {
      display: block;
      align-items: left;
      margin: 0px;
      padding: 0px;
      width: 250px;    
    }
    .sidebar-container {  
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
      background-color: white;
    }

    .dark-sidebar {
      margin-left: 0;
      background-color: black;
      color: white;
    }

    header {
      height: 6rem;
      display: flex;
      align-items: center;
      
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }

    .nav-link-dark {
      display: flex;
      align-items: center;
      color: white;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link-dark:hover {
      
      padding-left: 3rem;
      color: lightblue;
    }
    .nav-link-dark:hover .icon {
      color: lightblue;
    }


    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .nav-link.active {
      color: var(--grey-900);
    }
    .nav-link-dark.active {
      color: lightblue;
    }

    .active .icon {
      color: var(--primary-500);
    }

    

  }
`
export default Wrapper
