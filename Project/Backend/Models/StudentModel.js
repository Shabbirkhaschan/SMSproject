

import mongoose from "mongoose";


const StudentSchema=mongoose.Schema(
    {

        name:String,
        fatherName:String,
        cell:String,
        className:String
      


    }
)

export const StudentModel =mongoose.model("Student",StudentSchema
)