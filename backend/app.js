import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"



const app=express()

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



import userRoute from "./routes/userRoute.js"
import templateRoute from "./routes/templateRoute.js"
import { errroMiddleware } from "./middlelware/errorMiddleware.js"
import resumeRoute from "./routes/resumeRoute.js"


app.use("/api/v1/user",userRoute)
app.use("/api/v1/template",templateRoute)
app.use("/api/v1/resume",resumeRoute)

app.use(errroMiddleware)




export  {app}