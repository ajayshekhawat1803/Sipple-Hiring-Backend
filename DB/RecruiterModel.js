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
    Time: {
        type: String
    },
    liked: {
        type: Object,
        require: true
    },
    shortlisted: {
        type: Array,
        require: true
    }
})

const RecruiterModel = mongoose.model("recruiters", RecruiterSchema)

export default RecruiterModel
