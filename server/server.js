import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config';
import express from "express";

const app = express();
const port = process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}))


app.get('/',(req , res)=> res.send("Api Working"));

app.listen(port, ()=> console.log(`Server Started on PORT:${port}`));