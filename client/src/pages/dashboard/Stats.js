import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer, SankeyJobs } from '../../components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => { 
    showStats() 
    // eslint-disable-next-line
  }, [])  //empty dependency array - only refresh when component first rendered

  if (isLoading) {
    return <Loading center />           //show loading circle if loading
  }

  
  return (
    <>
    <h4 style={{textAlign:"center"}}>Active Statuses (Not Including Job History)</h4>
      <StatsContainer />
      {/* AND function allows cards to only display if monthly applications are not empty */}
      {monthlyApplications.length > 0 && <ChartsContainer />} 


      
      {monthlyApplications.length > 0 && <SankeyJobs/>} 
        
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>

    
  )
}

export default Stats
