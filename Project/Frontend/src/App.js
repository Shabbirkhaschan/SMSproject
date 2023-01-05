


import {Route,Routes,Router } from "react-router-dom"


import Login from "./Login/login";
import NavBar from "./NavBar/navbar"

import Signup from "./Form/signup";

import Child from "./Dashboard/Children/Child";
import Cruds from "./AdminSide/AdminDashboard/Crud";
import Fee from "./Dashboard/Children/Fee";
import Exams from "./Dashboard/Children/Exams";
import Faculity from "./Dashboard/Children/Faculity";
import Message from "./Dashboard/Children/Message";
import Contact from "./NavBar/contact";
import F2 from "./NavBar/f2";
import MobileApp from "./NavBar/mobile";

import StudentForm from "./StudentForm/StudentForm";
import StudentMap from "./StudentMap/StudentMap";
import AdminSideBar from "./AdminSide/AdminSidebar";
import SideBar from "./Dashboard/sidebar";
import Notification2 from "./AdminSide/AdminDashboard/Notification2";
import Message2 from "./AdminSide/AdminDashboard/Message2";
import Dashboard2 from "./AdminSide/AdminDashboard/Dashboard2";
import Classes from "./Students/classes";


// import Test from "./test";









function App( ) {

     return(
      
      <div>
        








    
      <Routes>

        <Route path="/" element={<NavBar/>}/>
        <Route path="/login" element={<Login/>}/>


        <Route path="/start" element={<SideBar/>} />
        <Route path="/sidebar" element={<Child/>} />
        <Route path="/student" element={<Classes/>}/>
        <Route path="/fee" element={<Fee/>}/>
        <Route path="/examsCell" element={<Exams/>}/>
        <Route path="/messages" element ={<Message/>}/>
        <Route path="/student" element ={<Classes/>}/>
        <Route path="/faculty" element ={<Faculity/>}/>

        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/act" element={<fMain/>}/>
      
        <Route path="/signUp" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/fetures" element={<F2/>}/>
        <Route path="/mobileApp" element={<MobileApp/>}/>
     
        <Route path="/studentform" element={<StudentForm/>}/>
        <Route path="/view" element={<StudentMap/>}/>
        
        
      <Route path="/admin" element={<AdminSideBar/>}/>

      <Route path="/crud" element={<Cruds/>}/>
      <Route path="/Notification2" element={<Notification2/>}/>
      <Route path="/Message2" element={<Message2/>}/>
      <Route path="/Dashboard" element={<Dashboard2/>}/>



      </Routes> 

     
    </div>
  );
}

export default App;
