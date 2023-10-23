import express from "express"
import RecruiterModel from "../DB/RecruiterModel.js";
import Jwt from "jsonwebtoken";
const RecruiterRouter = express.Router();
const secretKey = "Ajay Shekhawat"


RecruiterRouter.post("/info", async (req, res) => {
    const RecruiterInfo = new RecruiterModel(req.body)
    let result = await RecruiterInfo.save()
    if (result) {
        const payload = { _Id: result._id };
        const token = Jwt.sign(payload, secretKey, { expiresIn: '1h' });
        res.json({ result, token });
    } else {
        res.json({ message: "An Error Occured" })
    }
})


export default RecruiterRouter