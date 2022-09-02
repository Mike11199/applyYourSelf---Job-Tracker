import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => { showStats() }, [])  //so on page refresh will call the function

  if (isLoading) {
    return <Loading center />           //show loading circle if loading
  }
  return (
    <>
      <StatsContainer />
      {/* AND function allows cards to only display if monthly applications are not empty */}
      {monthlyApplications.length > 0 && <ChartsContainer />} 
    </>
  )
}

export default Stats
