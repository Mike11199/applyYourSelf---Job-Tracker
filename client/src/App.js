import Landing from "./pages/Landing"
import styled from 'styled-components'

const Button = styled.button`
  background: red;
  color:white;
  font-size: 1rem;
`
const ButtonSecond = styled.button`
  background: blue;
  color:white;
  font-size: 1rem;
`

function App() {
  return (
    <div>
      <ButtonSecond>Click ME</ButtonSecond>
      <Button>Click ME</Button>
      <h1>applyYourSelf</h1>
      <Landing />
    </div>
  )
}

export default App;
