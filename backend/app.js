import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"



const app=express()

app.use(cors({
    origin: "*",
    credentials: true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



import userRoute from "./routes/userRoute.js"
import templateRoute from "./routes/templateRoute.js"
import { errroMiddleware } from "./middlelware/errorMiddleware.js"


app.use("/api/v1/user",userRoute)
app.use("/api/v1/template",templateRoute)

app.use(errroMiddleware)




export  {app}