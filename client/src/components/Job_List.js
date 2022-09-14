import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job_List'
import JobInfo from './JobInfo'

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob, jobsCardsView } = useAppContext()
 
  let newStatus = status.replace('_',' ')  
  let newStatusCSS = status.replace('/','_')  

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
    
        <div className={ jobsCardsView? 'main-icon_list ': 'main-icon'}>{company.charAt(0)}</div>
        <div className='info'>

        </div>
        <div className='content'>
        <div className='content-center'>
        <h6>{position}</h6>
          <p>{company}</p>
          <JobInfo icon={<FaLocationArrow className='arrowImage'/>} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt className='calendarImage'/>} text={date} />
          <JobInfo icon={<FaBriefcase className='briefcaseImage'/>} text={jobType} />
          <div className={`status ${newStatusCSS}`}>{newStatus}</div>
          <div className='actions'>
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() => setEditJob(_id)}
            >
              Edit
            </Link>
          </div>
          <div className='actions'>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteJob(_id)}
            >
              <div className="big_delete">
              Delete
              </div>
              <div className="small_delete">
              X
              </div>
            </button>
          </div>
        </div>
        <footer>

        </footer>
      </div>
   

    </Wrapper>
  )
}

export default Job