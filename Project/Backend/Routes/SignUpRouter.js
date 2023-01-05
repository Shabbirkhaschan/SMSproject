
import express from "express";
import { PostSignUp } from "../Controller/SignUpControler.js";
//import { startApp } from "../Controller/Start.js";

const app=express.Router();

// app.get('/' ,(req,res)=>{


// });

app.post('/', PostSignUp);



export default app;