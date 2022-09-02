import Wrapper from '../assets/wrappers/StatItem'

const StatsItem = ({ count, title, icon, color, bcg }) => {

  return (                              //pass props like color and background color to styled component
    <Wrapper color={color} bcg={bcg}>  
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}

export default StatsItem
