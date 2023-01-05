import { SignUpModel } from "../Models/SignUpModel.js";


  


export  const PostSignUp= async (req , res) =>{

    console.log("Hitt");
  console.log(req.body);

const NewClient=await SignUpModel({

    
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
})

 try{

    await NewClient.save();
    res.json(NewClient);
 }
 catch(eroor){

    console.log(eroor)
 }
}


export const GetSignUp =async(req,res)=>{



}