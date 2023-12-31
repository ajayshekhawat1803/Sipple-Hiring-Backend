import express from 'express'
import cors from 'cors'
import connection from './DB/connection.js'
import RecruiterRouter from './Routes/RecruiterRouter.js'
import AdminRouter from './Routes/AdminRouter.js'
import Homerouter from './Routes/HomeRouter.js'
const app = express()
const Port = process.env.PORT || 4000
app.use(express.json());

app.use(cors())

app.use("/uploads", express.static('uploads'))

app.use("/recruiter", RecruiterRouter)
app.use("/admin", AdminRouter)
app.use("/home", Homerouter)
app.get("/", (req, res) => {
    res.json({ message: "Server is working and responding correctly" })
})

connection.then(() => {
    app.listen(Port, () => {
        console.log("Server has been started at port ", Port);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});