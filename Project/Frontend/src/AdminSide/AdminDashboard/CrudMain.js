
import "./Crudmain.css";


import { Routes ,Route } from "react-router-dom";
import AdminSideBar from "../AdminSidebar";
function CrudMain() {
   
   
   
   
    return ( 


     <div className="row">


          <div className="col-1">

     <AdminSideBar/>

          </div>


     <div  className="col-10" style={{  overflow:"hidden"}}>

     <img  id="dash" src="./std.png"/>

     </div>
     </div>

       
     );
}

export default CrudMain;