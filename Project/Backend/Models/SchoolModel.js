

import mongoose from "mongoose";


const SchoolSchema=mongoose.Schema(
    {

        name:String,
        email:String,
        password:String,
      


    }
)

export const SchoolModel =mongoose.model("School",SchoolSchema
)