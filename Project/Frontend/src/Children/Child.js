
import "./Child.css";
import { Routes ,Route } from "react-router-dom";
import SideBar from "../sidebar";
function Child() {
   
   
   
   
    return ( 


     <div className="row">


          <div className="col-1">


<SideBar/>

          </div>


<div  className="col-10" style={{  overflow:"hidden"}}>

<img  id="dash" src="./std.png"/>

</div>
     </div>

       
     );
}

export default Child;