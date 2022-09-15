import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaChevronDown, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job_List'
import JobInfo from './JobInfo'
import { useState } from 'react'
// import {CButton, CCollapse, CCard,CCardBody } from '@coreui/react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

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
  // const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false);

  let newStatus = status.replace('_',' ')  
  let newStatusCSS = status.replace('/','_')  

  let newJobType = '' 

  if (jobType == "rejected/archived"){
     newJobType = 'rejected/ archived'
  }
  else{
    newJobType = jobType
  }

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
          <p className='company_name'>{company}</p>
          <JobInfo icon={<FaLocationArrow className='arrowImage'/>} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt className='calendarImage'/>} text={date} />
          

          <JobInfo icon={<FaBriefcase className='briefcaseImage'/>} text={newJobType}  />
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
              <FaTrash />
              </div>

            </button>
            
          </div>
          {/* <button onClick={() => setVisible(!visible)}>Button</button>
            <CCollapse visible={visible}>
              <CCard className="mt-3" >
                <CCardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                  squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CCardBody>
              </CCard>

            </CCollapse> */}
                 <button
        className='btn expand-btn'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}

      >
        
        <FaChevronDown />
        
      </button>
        </div>
        
        <footer>

      <Collapse in={open}>
        <div id="example-collapse-text" className='test_collapse'>
        <div className='job_notes'>
          Job Status
        </div>
        <div className='job_notes'>
          Job Notes
        </div>
        <div className='job_notes'>
          New Status
        </div>
        <div className='job_notes'>
          New Note
        </div>
        <div className='job_notes'>
         Save Note
        </div>
        </div>

      </Collapse>
        </footer>
               

      </div>
   

    </Wrapper>
  )
}

export default Job