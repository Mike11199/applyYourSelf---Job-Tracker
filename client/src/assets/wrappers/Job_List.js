import styled from 'styled-components'

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);




  .expand-btn {
    
    margin-top: 5px;
    margin-left: 10px;
    width: 90px;    
    height: 30px;
    display: flex;

    justify-content: center;
    flex-direction: row;
    align-self: center;
    text-align: center;

    
  }
  .expand-btn2 {
    
    margin-top: 5px;
    margin-left: 10px;
    width: 90px;    
    height: 30px;
    display: flex;
    background-color: gray;

    justify-content: center;
    flex-direction: row;
    align-self: center;
    text-align: center;

    
  }



  @media (min-width: 445px) {


  .small_delete {
        display: none;
      }
    }

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
  .rejected_archived {
    color: #d66a6a;
    background: #ffeeee;
  }
  .no_response {
    background: #e0e8f9;
    color: #647acb;
  }
  .technical_interview {
    background: #e0e8f9;
    color: #647acb;
  }










  .content {
    padding: 0rem 1.5rem;
    border-bottom: 1px solid black;

  }


  .big_delete {
    display: visible;
  }



  @media (max-width: 441px) {
    
    .big_delete {
      display: none;
    }

    .small_delete {
      display: visible;
    }

    
  .job_notes {
      font-size: 8px;
      
    }
    
    .content-center {
      width: 100%;
      font-size: 8px;
      align-items: center;
      margin: 0px;
      padding-left: 5px;
      
      
    }
    .content {
    padding: 0px 0px 0px 0px ;
    border-bottom: 1px solid black;
    margin: 0px;
    width: 100%;
    
  
  }
    .status {
    font-size: 8px;

   }
   .arrowImage
   {
    display: none;
   }
   .calendarImage
   {
    display: none;
   }
   .briefcaseImage
   {
    display: none;
   }

  }



  
  .content-center {
    display: grid;
    align-items: center;

    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    column-gap: 2px;
    

    @media (max-width: 440px) {
      /* grid-template-columns:  3.5fr 3fr 2fr 2fr 3fr 4fr 2.5fr 2fr  ; */
      grid-template-columns: 35px 35px 38px 35px 35px 45px 25px 25px 35px ;
      
      overflow-wrap: anywhere;
      width: 100%;

      
      font-size: 6px;



      .small_delete {
        display: visible;
        align-self: center;
        
        padding: 0px;

      }

      .expand-btn {
      margin-left: 0px;
      margin-right: 0px;

      margin: 0px;
      width: 31px;    
      height: 20px;
        
      display: flex;
      align-items: center;
      flex-direction: row;
      overflow-wrap: normal;
      text-align: center;
  }


    h6 {
    font-size: 8px;
    font-family: var(--headingFont);
    font-weight: 400;
    margin: 0px;
    }
    
    p {
    font-size: 8px;
    margin: 0px;
    }

  .pending {
    width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
        
  }
  .interview {
   width: 42px;
   font-size: 6px;
   display: flex;
   justify-content: center;
   flex-direction: column;
  }
  .declined {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .coding_assessment {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .accepted {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .phone_interview {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .behavioral_interview {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .rejected_archived {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .no_response {
   width: 42px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .technical_interview {
    width: 40px;
    font-size: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .edit-btn {
    
    vertical-align: middle;
    width: 20px;
    padding: 0px;
    height: 20px;
    font-size: 6px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .delete-btn {
    
    width: 20px;    
    height: 20px;
    text-align: center;
    font-size: 7px;
    font-weight: 600;
    justify-content: center;
    display: flex;
    flex-direction: row;
    overflow-wrap: normal;
  
  }




  .rejected_archived {
    width: 42px;

  }



    }
    @media (min-width: 992px) {
      grid-template-columns: 2fr 2fr 2fr 2fr 1fr 2fr 1fr 1fr;

      p{
      margin: 0px;  
        padding: 0px;
        padding-top: 8px;
        margin-bottom: 4px;
      }     

      .job_notes {
          font-size: 12px;      
        }

    }

    @media (min-width: 1120px) {
      grid-template-columns: 2.2fr 2fr 2fr 2fr 1.5fr 2.5fr 1fr 1fr 1fr;
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
