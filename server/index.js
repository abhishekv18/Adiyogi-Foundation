import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";   
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js";
import blogRoutes from  "./routes/blog.route.js";
import volunteerRoute from "./routes/volunteer.route.js";
import contactRoute from "./routes/contact.route.js";
import subscribeRoute from "./routes/subscribed.route.js";

const app=express();


const corsOptions = {
    origin: ['https://adiyogi-foundation.vercel.app', 'https://www.adiyogifoundation.org.in'],
    credentials: true
};

app.use(cors(corsOptions));
 app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));   
   


app.use("/api/user",userRoutes);
app.use("/api/blog",blogRoutes);
app.use("/api/volunteer",volunteerRoute);
app.use("/api/contact",contactRoute);
app.use("/api/subscribe",subscribeRoute);


app.get("/api/ping", (req, res) => {
  res.status(200).send("pong");
});



import "./controllers/monthly.controller.js";
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

