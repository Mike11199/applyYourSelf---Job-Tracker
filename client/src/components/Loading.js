const Loading = ({ center }) => {



  // const returnObject =[
  //      {
  //        _id: "new ObjectId(6323f1  4f7f8c161e2 9288)",
  //        company: 'Some Company',
  //        position: 'Software Intern',
  //        status: 'pending',
  //        jobType: 'full-time',
  //        jobLocation: 'Some Place',
  //        createdBy: "new ObjectId(63 f83efc7a5a1 df53b7131)",
  //        jobNotes: '',
  //        jobHistory: {
  //          pastStatus: 'coding_assessment',
  //          pastNotes: 'will be on hackerrank',
  //          _id: "new ObjectId(6323f1  4f7f8c161e2 9289)"
  //        },
  //     },
  //     {
  //       _id: "new ObjectId(6323f1  4f7f8c161e2 9288)",
  //       company: 'Some Company',
  //       position: 'Software Intern',
  //       status: 'pending',
  //       jobType: 'full-time',
  //       jobLocation: 'Some Place',
  //       createdBy: "new ObjectId(63 f83efc7a5a1 df53b7131)",
  //       jobNotes: '',
  //       jobHistory: {
  //         pastStatus: 'technical_interview',
  //         pastNotes: 'date to be announced',
  //         _id: "new ObjectId(6323f1  4f7f8c161e2 928a)"
  //       },

  //     },
  //     {
  //       _id: "new ObjectId(6323f26e4f7f8c161e2 929b)",
  //       company: 'Google',
  //       position: 'Software Intern',
  //       status: 'technical_interview',
  //       jobType: 'full-time',
  //       jobLocation: 'Palo Alto',
  //       createdBy: "new ObjectId(63 f83efc7a5a1 df53b7131)",
  //       jobNotes: '',
  //       jobHistory: {
  //         pastStatus: 'technical_interview',
  //         pastNotes: 'second interview',
  //         _id: "new ObjectId(63263e8293d76a52db f9c72)",
  //       },
  //     },
   
  //   ]

  //   const pastStatuses = returnObject.map((item) => {

  //     const {jobHistory} = item
      
  //     return {jobHistory}
  // })
  // console.log(pastStatuses)




    return <div className={center ? 'loading loading-center' : 'loading'}></div>
  }
  
  export default Loading
  