import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { User } from "./model/userModel.js";
import userRoute from "./routes/apiRoutes.js";

const PORT = process.env.PORT || 5656; 
 
const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', userRoute);


app.listen(PORT, ()=>{
    console.log("Running at Port: " + PORT);
})

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to DB");  
    })
    .catch((error)=>{
        console.log("error reaching DB");
        console.log(error);
    })

