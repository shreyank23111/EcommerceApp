import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());






import userRoute from "./Routes/user.routes.js";

app.use("/api/v1/users", userRoute);


export { app }