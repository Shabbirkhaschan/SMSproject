
 import mongoose from "mongoose";
 import bodyParser from "body-parser";
 import cors from "cors";
 import SignUpRouter from "./Routes/SignUpRouter.js"
 import SchoolRouter from"./Routes/SchoolRouter.js";
 import StudentRouter from"./Routes/StudentRouter.js";
import express from "express";

const app= express();

const apiKey ="mongodb+srv://SK:1234@sk.cw5q24v.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery' ,true);
mongoose.connect(apiKey,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=> console.log("Connect to database."));

app.listen(3200,()=>console.log("server is listening"));

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use('/start',SignUpRouter)
app.use('/school',SchoolRouter)

app.use('/studentform',StudentRouter)
app.use('/view',StudentRouter)


// const server = http.createServer((req,res) => {


//         res.write("Welcome to Node JS - Lecture 2.");
//         res.end();
//     server.listen(8000);

// })