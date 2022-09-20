import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .delete-btn {
    margin-top: 40px;
    background-color: red;
    color: white;
    height: 30px;
    border:0px;
    border-radius: 21px;
  }
  
  .add-btn {
    
    margin-top: 40px;
    background-color: green;
    color: white;
    height: 30px;
    border:0px;
    border-radius: 21px;
  
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }

  .form_center_2
  {
    display: grid;
    row-gap: 0.5rem;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form_center_2 {
      grid-template-columns: 1fr 1fr .05fr .05fr;


      .form-input{
      height: 100px;
    }
    .form-select{
      height: 100px;
    }
    }
    .form-center button {
      margin-top: 0;
    }
  }
  @media (max-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr;
      font-size: 11px;
    }
    .form_center_2 {
      margin-top: 40px;
      grid-template-columns:  2fr  ;
      font-size: 10px;

      .form-input{

        height: 100px;
      }

    }
    .form-center button {
      margin-top: 0;
    }
    .submit-btn{
      
      font-size: 8px;
      
      text-align: center;
      justify-content: center;
      
    }
    .clear-btn{
      
      font-size: 8px;
   
      text-align: center;
      justify-content: center;
      
    }
    .delete-btn{
      
      margin: 0px;
      
      padding: 0px;
      
    }
    .add-btn{
      margin: 0px;
      margin-bottom: 30px;
      
    }




  }
`

export default Wrapper
