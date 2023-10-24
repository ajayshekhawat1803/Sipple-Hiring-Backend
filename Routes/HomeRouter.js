import express from "express"
import Jwt from "jsonwebtoken";
import CandidateModel from "../DB/CandidateModel.js";


const Homerouter = express.Router();
const secretKey = "Ajay Shekhawat"

Homerouter.get("/all-candidates", async (req, res) => {
    let result = await CandidateModel.find({})
    res.json(result)
})

Homerouter.get("/candidate/:id", async (req, res) => {
    let result = await CandidateModel.find({_id:req.params.id})
    res.json(result)
    console.log("response gya");
})


export default Homerouter