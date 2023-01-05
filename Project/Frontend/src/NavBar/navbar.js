import "./navbar.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import{ FaSearch} from "react-icons/fa";

import Fetures from "../Fetures/fetures";
import Client from "../Client/client";
import Simple from "../Simple/simple";
import Footer1 from "../Footer/footer";
import MobileApp from "./mobile";





function NavBar() {

  
    return ( 


<div>
        <div id="navBar">
        <div id="nav">
        <div id="logo">
        <img style={{
            width:"15vw",
            height:"13vh",
             marginTop:"1.2%"
            
           }}
           src="./Eschool.png"/>
          </div>

      <div id="search">
          <div class="input-group rounded">
              <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
      
               <button id="S">  <FaSearch/> </button>
            </span>
       
         </div>
      </div>

        <div id="actions">
           <h3 id="Ntext">

          <Link  className="act"   to="/">
            HOME
          </Link>
            
          <Link to="/fetures" className="act">
          FEATURES
            </Link>

          <Link to="/mobileApp" className="act">
            MOBILE APP
          </Link>

          <Link to="/contact" className="act">
            CONTACT US
          </Link>

          <Link to="/login" className="act">
            GET STARTED
          </Link>

          <Link to="/start" className="act">
            LOGIN
          </Link>
       
          </h3>

        </div>
        </div>
        </div>
        
<div></div>
        <div id="botom">
        <div  id="crusel">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="./background.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src="./website home.jpg.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
      <img src="./website home.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
             </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
      <div id="trial">
        <div id="centerTrial">
            <h1 id="textStart" style={
              {
                color:"white"
              }
            }>
              Start Your Free
            </h1>
           
            
            <button id="trialButton">
              <h1>Trial Now!</h1>
            </button>

          </div>
        </div>
      
        <div>
        <Simple/>
        </div>
      <div>
        <div id="fetureHead">
          <h2>
            AMAZING FETURES & FLEXIBILITY PROVIDED
          </h2>
        </div>
    <Fetures id="fetures"/>
    </div>
    
   





   <div>
    <Client/>
   </div>

<div >
<Footer1/>

</div>
    </div>
        </div>
        
        
     );
          }

export default NavBar;
