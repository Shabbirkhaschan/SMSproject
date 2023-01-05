import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addApplication } from "./api";


function Test() {

const [name,setName]=useState({


    user:"",
    password:"123"
 
});

const navigate=useNavigate();

    const SetValue =(e)=>{

setName({user:e.target.value});
    

    }



const Name=(e)=>{

e.preventDefault();
addApplication("Ali");

}

    
    return (  

        <div>

        <input type ="text"   onChange={SetValue}  />
            <button  onClick={ e =>Name(e)} >


                Submit
            </button>

  {name.user}
        
        </div>
    );
}

export default Test;
