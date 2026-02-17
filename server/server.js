import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config';
import express from "express";
import connectDB from "./config/mongodb.js";
import UserModel from "./models/user.js";


const app = express();
const port = process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}))


app.get('/', async (req , res)=> {
    try {
        await connectDB
        console.log("/ route hit")
        const user = UserModel.create({
            name: "Saurabh",
            email: "abc@gmail.com"
        })

        console.log(user)
        return res.json({
            message: "user created successfully"
        })
        
    } catch (error) {
        
    }
});

app.listen(port, ()=> console.log(`Server Started on PORT:${port}`));