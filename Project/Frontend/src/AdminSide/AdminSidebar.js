import { Link, Route, Routes } from "react-router-dom";
import "./adminSidebar.css";



function AdminSideBar() {

    
    
    return (
    

      <div>  

    
        <div  className="sidenav2">
            <div id="logo">
               <img style={{
                width:"70px",
                height:"63px",
                marginLeft:"25px",
                
               }}
               src="./logo.png"/>
               
               <div class="dropdown">
  <div  style={{
    background:"none",
  }} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Shabbir Hussain
  
  

 
  
</div>
                </div>

            <div id="act2">
            <Link  className="Links" to="/Dashboard"><div className="dashMenu">
             Dashboard
            </div></Link>
            <Link className="Links" to="/crud"><div className="dashMenu">CRUD</div></Link>
            <Link className="Links" to="/Message2">  <div className="dashMenu">Message</div></Link>
            <Link className="Links" to="/notification2"><div className="dashMenu">Notification</div></Link>
            <Link className="Links" to="/logout">  <div className="dashMenu">Logout</div></Link>
        </div>

            </div>

            <Routes>
            
             <Route path="/login/student" />

            </Routes>
          
            
            </div>
            </div>

            );
}

export default AdminSideBar;