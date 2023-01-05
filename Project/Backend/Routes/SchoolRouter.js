
import express from "express";
import { PostSchool } from "../Controller/SchoolControler.js";

//import { startApp } from "../Controller/Start.js";

const app=express.Router();

// app.get('/' ,(req,res)=>{


// });

app.post('/', PostSchool);



export default app;