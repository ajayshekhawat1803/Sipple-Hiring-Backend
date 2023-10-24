import express from "express"
import Jwt from "jsonwebtoken";
import CandidateModel from "../DB/CandidateModel.js";


const Homerouter = express.Router();
const secretKey = "Ajay Shekhawat"

Homerouter.get("/all-candidates", async (req, res) => {
    let result = await CandidateModel.find({})
    res.json(result)
})

export default Homerouter