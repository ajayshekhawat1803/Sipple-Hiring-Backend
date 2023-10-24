import mongoose from "mongoose";


const CandidateSchema = new mongoose.Schema({
    name: String,
    category: String,
    skills: Array,
    mobile: Number,
    email: String,
    profilePic: Object,
    qualifications: Object,
})

const CandidateModel = mongoose.model("candidates", CandidateSchema)

export default CandidateModel
