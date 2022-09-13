import styled from 'styled-components'

const Wrapper = styled.section`  

  .googleButton2:hover {    
    background-color: blue;
  }
  @media (min-width: 992px) {
  .googleButton2 {    
    display: flex;
    flex-direction: row;
    width: '100%';
    background-color: 'red';
    color:'white';
    height:'55px';
    display:'flex';
    align-items:'center';
    align-self:'center';
    border:'0px';
  }
  .googleButton2:hover {    
    box-shadow: var(--shadow-1);
  }
}

`
export default Wrapper
