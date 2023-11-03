import express from "express"
import RecruiterModel from "../DB/RecruiterModel.js";
import Jwt from "jsonwebtoken";
const RecruiterRouter = express.Router();
const secretKey = "Ajay Shekhawat"


RecruiterRouter.post("/info", async (req, res) => {
    const RecruiterInfo = new RecruiterModel(req.body)
    console.log(RecruiterInfo);
    let result = await RecruiterInfo.save()
    if (result) {
        const payload = { _Id: result._id };
        const token = Jwt.sign(payload, secretKey, { expiresIn: '1h' });
        res.json({ result, token });
    } else {
        res.json({ message: "An Error Occured" })
    }
})

RecruiterRouter.put("/shortlist", async (req, res) => {
    let result = await RecruiterModel.findByIdAndUpdate({ _id: req.body._id }, { $set: req.body })
    res.json(result)
})
RecruiterRouter.get("/liked/:id", async (req, res) => {
    let result = await RecruiterModel.findOne({ _id: req.params.id })
    res.json(result)
})

export default RecruiterRouter