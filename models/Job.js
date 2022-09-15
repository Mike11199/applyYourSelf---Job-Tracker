import mongoose from "mongoose"

const JobSchema = new mongoose.Schema({
    company: {
        type: String, 
        required: [true, 'Please provide company'],
        maxlength: 50,
    },
    position: {
        type: String, 
        required: [true, 'Please provide position'],
        maxlength: 100,
    },
    status: {
        type: String, 
        enum: ['technical_interview', 'declined','pending','accepted','coding_assessment', 'phone_interview', 'behavioral_interview',  'rejected/archived', ''],
        default: 'pending',
    },
    jobType: {
        type: String, 
        enum: ['full-time', 'part-time','remote', 'internship', 'hybrid'],
        default: 'full-time',
    },
    jobLocation: {
        type: String, 
        default: 'my city',
        required: true,
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    },     
    notes: {
        type: String, 
        default: '',
        required: false,
    },

    jobHistory:
      [{
        company: {
            type: String,             
            maxlength: 50,
            required: false,
        },
        position: {
            type: String,             
            maxlength: 100,
            required: false,
        },
        status: {
            type: String, 
            enum: ['technical_interview', 'declined','pending','accepted','coding_assessment', 'phone_interview', 'behavioral_interview',  'rejected/archived', ''],
            default: '',
            required: false,
        },
        jobType: {
            type: String, 
            enum: ['full-time', 'part-time','remote', 'internship', 'hybrid',''],
            default: '',
            required: false,
        },
        jobLocation: {
            type: String, 
            default: '',     
            required: false,       
        },    
        notes: {
            type: String, 
            default: '',
            required: false,
        }}], 

},

{ timestamps: true }

)

export default mongoose.model('Job', JobSchema)