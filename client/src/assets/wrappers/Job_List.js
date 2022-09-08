import styled from 'styled-components'

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  h6 {
    font-size: 20px;
    font-family: var(--headingFont);
    font-weight: 400;
    margin: 0px;
    }

  header {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr ;
    align-items: center;
    h5 {
      letter-spacing: 0;
      
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .main-icon_list {
    display: none;
  }
  .info {
    h5 {
      margin-bottom: 0rem;
      border-width: 0px;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .pending {
    background: #fcefc7;
    color: #e9b949;
  }
  .interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .coding_assessment {
    background: #FBCEB1;
    color: #F28C28;
  }
  .accepted {
    background: #e0e8f9;
    color: #647acb;
  }
  .phone_interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .behavioral_interview {
    background: #e0e8f9;
    color: #647acb;
  }
  .rejected {
    color: #d66a6a;
    background: #ffeeee;
  }
  .no_response {
    background: #e0e8f9;
    color: #647acb;
  }










  .content {
    padding: 0rem 1.5rem;
    border-bottom: 1px solid black;

  }









  
  .content-center {
    display: grid;
    align-items: center;
    
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 2fr 2fr 2fr 2fr 1fr 2fr 1fr 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 2.2fr 2fr 2fr 2fr 1.5fr 2.5fr 1fr 1fr;
    }

  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 180px;
    height: 30px;
  }
  footer {
    margin-top: 1rem;

  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
    margin-right: 0rem;
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
  }
  &:hover .actions {
    visibility: visible;
  }
`

export default Wrapper
