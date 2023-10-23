import express from 'express'
import cors from 'cors'
import connection from './DB/connection.js'
import RecruiterRouter from './Routes/RecruiterRouter.js'
const app = express()
const Port = 4000
app.use(express.json());

app.use(cors())

app.use("/recruiter", RecruiterRouter)

connection.then(() => {
    app.listen(Port, () => {
        console.log("Server has been started at port ", Port);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});