

import mongoose from "mongoose";


const SignUpSchema=mongoose.Schema(
    {

        name:String,
        email:String,
        password:String,
      


    }
)

export const SignUpModel =mongoose.model("Client",SignUpSchema
)