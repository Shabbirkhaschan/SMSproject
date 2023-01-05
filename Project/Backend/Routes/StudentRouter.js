
import express from "express";

import { GetStudent, PostStudent } from "../Controller/StudentControler.js";

//import { startApp } from "../Controller/Start.js";

const app=express.Router();

// app.get('/' ,(req,res)=>{


// });

app.post('/', PostStudent);

app.get('/',GetStudent);

export default app;