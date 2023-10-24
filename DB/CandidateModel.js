import mongoose from "mongoose";


const CandidateSchema = new mongoose.Schema({
    name: String,
    category: String,
    skills: Array,
    mobile: Number,
    email: String,
    linkedIn: String,
    github: String,
    profilePic: Object,
    qualifications: {
        secondary: {
            schoolName10: String,
            year10: String,
            percentage10: String
        },
        seniorSecondary: {
            schoolName12: String,
            year12: String,
            percentage12: String
        },
        graduation: {
            collegeName: String,
            year: String,
            percentage: String
        }
    },
    projects: Array,
    resume: Object
})

const CandidateModel = mongoose.model("candidates", CandidateSchema)

export default CandidateModel
