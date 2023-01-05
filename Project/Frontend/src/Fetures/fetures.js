import { useState } from "react";
import "./fetures.css";


function Fetures() {

    const [fetures,setFetures]=useState([
   {name:"Multiuser",description:"Schools Management System provides the multi user system for each employee and Teacher of a School with their distinct logins. It really helps and minimize the workload"
   , action:"ReadMore",image:"./Multiuser.png"  },
   {name:"Multilanguage",description:"Schools Management System automatically detects your preferred language and translates the entire system in your native language."
   , action:"ReadMore",image:"./Multilanguage.png"  },
   {name:"Messaging",description:" keep the users up-to-date with secure, fast and cost-effective messaging system of UVSchools. It strengthens the relationship among parents, teacher"
   , action:"ReadMore",image:"./messaging.png"  },
   {name:"Account",description:"Create a virtual account of your School for all financial and business transactions. Account module records and manages your all incomes and"
   , action:"ReadMore",image:"./accounts.png"},
   {name:"Account",description:"Create a virtual account of your School for all financial and business transactions. Account module records and manages your all incomes and"
   , action:"ReadMore",image:"./accounts.png"},
   {name:"Account",description:"Create a virtual account of your School for all financial and business transactions. Account module records and manages your all incomes and"
   , action:"ReadMore",image:"./accounts.png"}

 
]);
    return (  




        <div id="fMain">
            

{

    fetures.map((ref)=>
    (
        
        
            
        <div id="fetures" class="card-group">
        <div class="card">
             <img src={ref.image} class="card-img-top" alt="..." style={{
            width:"85px",
            height:"85px",
             marginLeft:"38%",
             marginTop:"-20px",
             borderRadius:"100px",
             border:"3px solid white",
             

           }}/>
               <div class="card-body">
             <h5 class="card-title" style={{
                    marginLeft:"5%",
                    textAlign: "center",
                 }}>{ref.name}</h5>
             <p class="card-text">{ref.description}</p>
                 <h3 style={{
                    marginLeft:"5%",
                    textAlign: "center",
                 }}
                  class="card-text"><small class="text-muted"> <button class="custom-btn btn-2" style={{color: 'white'}}>Read More</button></small></h3>
               </div>
</div>
</div>


    ))
}
                      
            </div>

     );
}

export default Fetures;