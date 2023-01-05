
import { Link } from "react-router-dom";
import AdminSideBar from "../AdminSidebar";
import "./CrudMain.css";
import Message2 from "./Message2";


function Crud() {
    return ( 


        <div >
<AdminSideBar/>
         <div id="mainDiv">

<div className="row" style={{height:"20%"}}>


<div id="imgDiv" className="col-4">

<img className="imag" src="./classIcon.jpg"/>
<h5>
<Link  to="/signUp">
    <button > Create</button>

    </Link>

</h5>

</div>
<div id="imgDiv" className="col-4">

<img className="imag" src="./classIcon.jpg"/>
<h5>

<button> Read</button>

</h5>

</div>
<div id="imgDiv" className="col-4">

<img className="imag" src="./classIcon.jpg"/>
<h5>

<button> Update</button>

</h5>

</div>
<div id="imgDiv" className="col-4">

<img className="imag" src="./classIcon.jpg"/>
<h5>

<button> Delete </button>

</h5>

</div>


</div>




</div>


  







         </div>
















         
          
        
     );
}

export default Crud;