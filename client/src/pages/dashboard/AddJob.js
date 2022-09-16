import { FormRow, FormRowSelect, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'



const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,  //array
    status,
    status_no_underscore,
    statusOptions,   //array
    handleChange,
    clearValues,
    createJob,
    editJob,
    jobHistory,
    handleChangeArray,
    refreshState,
  } = useAppContext()

  
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()
      return
    }
    
 
    if(isEditing) {
      editJob()
      return
    }
    createJob()
  }
  
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  const handleJobInput2 = (e) => {
    const name = e.target.name
    const value = e.target.value

    const value2 = e.target.value.replace(' ', '_')

    handleChange({ name: 'status_no_underscore', value })
    handleChange({ name, value: value2 })

  }

  
  const handleJobInputArray = (e) => {
    

    const name_array = e.target.name.split('_')
    const name2 = name_array[0]
    const index = name_array[1]
    const value = e.target.value
    // jobHistory[`${index}`][`${name2}`] = value
    let jobHistory2 = [...jobHistory]
    jobHistory2[index] = {[name2]:  value, pastStatus: jobHistory[index]["pastStatus"], _id: jobHistory[index]["_id"] }
    // const name = `jobHistory[${index}][${name2}]`
    const name = `jobHistory`

    handleChangeArray(name, jobHistory2)

  }

  const handleJobInputArray2 = (e) => {
    

    const name_array = e.target.name.split('_')
    const name2 = name_array[0]
    const index = name_array[1]
    const value = e.target.value.replace(' ', '_')
    // jobHistory[`${index}`][`${name2}`] = value
    let jobHistory2 = [...jobHistory]
    jobHistory2[index] = {[name2]:  value, pastNotes: jobHistory[index]["pastNotes"], _id: jobHistory[index]["_id"] }
    // const name = `jobHistory[${index}][${name2}]`
    const name = `jobHistory`

    handleChangeArray(name, jobHistory2)

  }

  const handleJobInputArray3 = (id) => {

    const index = parseInt(id)
    // console.log(index)
    let jobHistory2 = [...jobHistory]
    jobHistory2.splice(index,1)
    // const name = `jobHistory[${index}][${name2}]`
    const name = `jobHistory`

    handleChangeArray(name, jobHistory2)

  }





  const statusOptionsRenamed =(statusOptions) => {    
    const statusOptionsNew = statusOptions.map( item => item.replace('_', ' '))
    return statusOptionsNew
  }


  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}
          <FormRowSelect
            name='status'
            value={status_no_underscore}
            handleChange={handleJobInput2}
            list={statusOptionsRenamed(statusOptions)}
          />
          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>

        </form>

        <h3>{isEditing ? 'Add Job History' : 'Edit Job History'}</h3>
  

          {/* //https://ordinarycoders.com/blog/article/javascript-react-map-method */}
          <button
              className='btn btn-block clear-btn'
              style={{width: "30%", backgroundColor:"black"}}
              onClick={(e) => {
                jobHistory.push({pastStatus: 'pending', pastNotes: ''})
                refreshState()
              }}
            >
              Add New Line
            </button>
          <div className='form_center_2' >


          {jobHistory.map((pastJob, index) => {

          return      (

    
          <>
          <FormRowSelect
            key={`${pastJob._id}_pastStatus_${index}`}
            type='text'
            labelText={`Previous State - ${index}`}
            name={`pastStatus_${index}`}
            value={pastJob.pastStatus.replace('_', ' ')}
            handleChange={handleJobInputArray2}
            list={statusOptionsRenamed(statusOptions)}
          />
          <FormRow
            key={`${pastJob._id}_pastNotes_${index}`}
            type='text'
            labelText='Notes'
            name={`pastNotes_${index}`}
            value={pastJob.pastNotes}
            handleChange={handleJobInputArray}
          />
          
          <button className="delete-btn" id={`${index}`} onClick={() => handleJobInputArray3(`${index}`)}  >Delete</button>
          </>


         
          )


          })}

        </div>



        
    </Wrapper>
  )
}

export default AddJob
