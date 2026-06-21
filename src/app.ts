import express, { type Application, type Request, type Response } from "express"
import { logger } from "./middleware/logger"
import { globalerrroHandler } from "./middleware/globalerrorhandler"
import { error } from "node:console"

const app:Application = express()

app.use(logger)

app.get("/",(req:Request,res:Response)=>{
   throw new Error("Server is dying")
   res.send("Hello world")
})

app.use(globalerrroHandler)


export default app