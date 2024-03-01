import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";


const app = express()
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
// app.use(bodyParser.json());

app.use(cookieParser());






import userRoute from "./Routes/user.routes.js";
import addressRoute from "./Routes/address.routes.js";
import contactRoute from "./Routes/contactUs.routes.js"
import beMerchantRoute from "./Routes/merchant.routes.js"
import brandRoute from "./Routes/brand.routes.js"

app.use("/api/v1/users", userRoute);
app.use("/api/v1/address", addressRoute);
app.use("/api/v1/contact", contactRoute);
app.use("/api/v1/merchant", beMerchantRoute);
app.use("/api/v1/brand", brandRoute)


export { app }