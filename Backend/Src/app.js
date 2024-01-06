import express from "express"
import cors from "cors"


const app = express()

app.use(cors({
  origin: process.eventNames.CORS_ORIGIN,
  credentials: true
}));

import userRoute from "./Routes/user.routes.js";

app.use("/api/v1,users", userRoute);


export { app }