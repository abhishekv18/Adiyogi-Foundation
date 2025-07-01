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


app.use(express.json());
app.use(express.urlencoded({extended:true}));   
app.use(cookieParser());    
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));
app.use("/api/user",userRoutes);
app.use("/api/blog",blogRoutes);
app.use("/api/volunteer",volunteerRoute);
app.use("/api/contact",contactRoute);
app.use("/api/subscribe",subscribeRoute);
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

