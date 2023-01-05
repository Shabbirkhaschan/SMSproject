import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {addApplication} from '../api.js';
import "./login.css";

function Login() {

//here we intialize refrence

// here we change our current state with refrence in our concern 

const navigate=useNavigate();
const [data,setData]=useState({

  user:"",
  pass:""
});

const SetData=(e)=>{

  console.log(e.target.name+"     "+e.target.value);

setData({...data,[e.target.name]:e.target.value})


}


const [path,setPath]=useState("");

const Auth=()=>{
  
  console.log("Reached Out")
  if (data.user==="Shabbir"&&data.pass==="1234") {
    setPath("/admin")
    console.log("Reached")
        
    
  
  }else{

    setPath("/start")

  }
}


    return ( 
    <div class="container">
    
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
                <input type="text" class="login__input" name="user"  placeholder="User name / Email" 
                onChange={(e)=>SetData(e)}
                />
                  </div>
                    <div class="login__field">
                      <i class="login__icon fas fa-lock"></i>
                         <input type="password" class="login__input" name="pass" placeholder="Password" 
                          onChange={(e)=>SetData(e)} />
                             </div>
                             <Link onClick={Auth}  to={path}  style={{textDecoration:"none"}}>
                            <button class="button login__submit"  >
                         
                         <span class="button__text" >Log In Now</span>
                       
                      <i class="button__icon fas fa-chevron-right"></i>
                    </button>		
                    </Link>
                    <Link to="/SignUp" style={{textDecoration:"none"}}>

                  <button class="button login__submit">
               
                <span class="button__text">Register School</span>
                </button>		
              </Link>
            <i class="button__icon fas fa-chevron-right"></i>
       
        </form>
          <div class="social-login">
            <div class="social-icons">
               <a href="#" class="social-login__icon fab fa-instagram"></a>
                 <a href="#" class="social-login__icon fab fa-facebook"></a>
             `  `  <a href="#" class="social-login__icon fab fa-twitter"></a>
                      </div>
                        </div>
                         </div>
                             <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                         <span class="screen__background__shape screen__background__shape3"></span>		
                    <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
           </div>		
         </div>
    </div>



     );
}

export default Login;