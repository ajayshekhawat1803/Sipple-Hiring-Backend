import express from "express"
import Jwt from "jsonwebtoken";
import CandidateModel from "../DB/CandidateModel.js";


const AdminRouter = express.Router();
const secretKey = "Ajay Shekhawat"

AdminRouter.post("/login", async (req, res) => {
    const { username, password } = req.body
    if (username === "admin" && password === "admin") {
        res.status(200).json({ message: "Successful Login" })
    }
    else{
        res.json({ message: "Invalid Credentials" })
    }
})
AdminRouter.post("/add-candidate",async (req,res)=>{
    const CandidateInfo = new CandidateModel(req.body)
    let result = await CandidateInfo.save()
    res.json(result)
})

export default AdminRouter