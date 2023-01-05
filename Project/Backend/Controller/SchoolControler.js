import { SchoolModel } from "../Models/SchoolModel.js";



  


export  const PostSchool=async(req , res) =>{

    console.log("Hitt");
  await console.log(req.body)

const NewSchool=await SchoolModel({

    
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
})

 try{

    await NewSchool.save();
    res.json(NewSchool);
 }
 catch(eroor){

    console.log(eroor)
 }
}


export const GetSchool =async(req,res)=>{



}