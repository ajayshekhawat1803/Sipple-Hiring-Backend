import mongoose from "mongoose";


const RecruiterSchema = new mongoose.Schema({
    HrName: {
        type: String,
        require: true
    },
    HrEmail: {
        type: String,
        require: true
    },
    HrCompany: {
        type: String,
        require: true
    },
    Time:{
        type: String
    }
})

const RecruiterModel = mongoose.model("recruiters", RecruiterSchema)

export default RecruiterModel
