import express from "express"
import multer from 'multer'
import path from "path";
import Jwt from "jsonwebtoken";
import CandidateModel from "../DB/CandidateModel.js";


const AdminRouter = express.Router();
const secretKey = "Ajay Shekhawat"

//code to save image in uploads/product folder with filename as product name
const storage = multer.diskStorage({
    destination: "uploads/Candidates",
    filename: function (req, file, callback) {
        // Use the student's name as the filename and keep the original extension
        const ext = path.extname(file.originalname);
        const filename = req.body.name + ext;
        callback(null, filename);
    },
})
const upload = multer({ storage: storage });

AdminRouter.post("/login", async (req, res) => {
    const { username, password } = req.body
    if (username === "admin" && password === "admin") {
        res.status(200).json({ message: "Successful Login" })
    }
    else {
        res.json({ message: "Invalid Credentials" })
    }
})


AdminRouter.post("/add-candidate", upload.single("profilePic"), async (req, res) => {
    const CandidateInfo = new CandidateModel(req.body)
    CandidateInfo.profilePic = req.file
    let result = await CandidateInfo.save()
    res.json(result)
})

export default AdminRouter



// const profilePicStorage = multer.diskStorage({
//     destination: 'uploads/Candidates',
//     filename: function (req, file, callback) {
//         const ext = path.extname(file.originalname);
//         const filename = req.body.name + ext;
//         callback(null, filename);
//     },
// });
// const resumeStorage = multer.diskStorage({
//     destination: 'uploads/Resumes',
//     filename: function (req, file, callback) {
//         const ext = path.extname(file.originalname);
//         const filename = req.body.name + ext;
//         callback(null, filename);
//     },
// });
// const uploadProfilePic = multer({ storage: profilePicStorage });
// const uploadResume = multer({ storage: resumeStorage });
// AdminRouter.post("/add-candidate", uploadProfilePic.array('profilePic', 1), uploadResume.array('resume', 1), async (req, res) => {
//     const CandidateInfo = new CandidateModel(req.body)
//     CandidateInfo.profilePic = req.files[0]
//     CandidateInfo.resume = req.files[1]
//     let result = await CandidateInfo.save()
//     res.json(result)
// })