import { useState } from "react";
// import "./fetures.css";


function F2() {

    const [fetures,setFetures]=useState([
   {name:"Multiuser",description:"Schools Management System provides the multi user system for each employee and Teacher of a School with their distinct logins. It really helps and minimize the workload"
   , action:"ReadMore",image:"./Multiuser.png"  },
   {name:"Multilanguage",description:"Schools Management System automatically detects your preferred language and translates the entire system in your native language."
   , action:"ReadMore",image:"./Multilanguage.png"  },
   {name:"Messaging",description:" keep the users up-to-date with secure, fast and cost-effective messaging system of UVSchools. It strengthens the relationship among parents, teacher"
   , action:"ReadMore",image:"./messaging.png"  },
   {name:"Account",description:"Create a virtual account of your School for all financial and business transactions. Account module records and manages your all incomes and"
   , action:"ReadMore",image:"./accounts.png"},
    {name:"Fee Collection",description:"Automated and streamlined fee collection, makes it easy for the management to maintain real time tracking of collected and pending fees"
   , action:"ReadMore",image:"./Fee collection.png"  },
   {name:"Online registration",description:"Make your School digital with UVSchools, System creates a web link of your school admission page where parents can apply for admission of their child in your. It really helps and minimize the workload"
   , action:"ReadMore",image:"./online registration.png"  }
 
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
                    marginLeft:"35%",
                 }}>{ref.name}</h5>
             <p class="card-text">{ref.description}</p>
                 <h3 style={{
                    marginLeft:"25%",
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

export default F2;