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
    
      <StatsContainer />
      {monthlyApplications.length > 0 && <div style={{display:"flex",textAlign:"right", fontSize:"12px"}}>**Does not include past statuses in notes </div>} 
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
