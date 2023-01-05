import { StudentModel } from "../Models/StudentModel.js";



  


export  const PostStudent=async(req , res) =>{

    console.log("Hitt Student");
  await console.log(req.body)

const NewStudent=await StudentModel({

    
    name:req.body.name,
    fatherName:req.body.fatherName,
    cell:req.body.cell,
    className:req.body.className,
})

 try{

    await NewStudent.save();
    res.json(NewStudent);
 }
 catch(eroor){

    console.log(eroor)
 }
}


export const GetStudent =async(req,res)=>{


    try{

    const student=await StudentModel.find();

    res.json(student);
        
    }catch(error){

   console.log(error);
    }


}