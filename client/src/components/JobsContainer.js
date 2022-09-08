
import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'
import Job_List from './Job_List'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer'


const JobsContainer = () => {
const { getJobs, jobs, isLoading, page, totalJobs, search, searchStatus, searchType, sort, numOfPages, changeJobView, jobsCardsView } = useAppContext()
  useEffect(() => {
    getJobs()
    
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, jobsCardsView, page])

  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <button className='btn' type='button' onClick={()=>console.log(changeJobView())}>
        { jobsCardsView ? 'Card View' : 'List View' }
      </button>
      <h2></h2>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className= {jobsCardsView ? 'jobs-card' : 'jobs' }>
        {jobs.map((job) => {

          if (jobsCardsView) {

          return <Job_List key={job._id} {...job} />

          }
          else {

            
          
          return <Job key={job._id} {...job} />

          }

        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
      {/*Above will add pagination buttons */}
    </Wrapper>
  )
}

export default JobsContainer