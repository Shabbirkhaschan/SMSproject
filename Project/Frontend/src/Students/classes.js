import { useState } from "react";

import { Link } from "react-router-dom";


import SideBar from "../Dashboard/sidebar";


function Classes() {
    
    const [data, setData] = useState([

        { name: "Class Nuresery", count: 45, alt: "doctor icon" },
        { name: "Class Prep", count: 30, alt: "data entery icon" },
        { name: "Class 1st", count: 20, alt: "patient icon" },
        { name: "Class 2nd", count: 40, alt: "doctor icon" },
        { name: "Class 3rd", count: 67, alt: "data entery icon" },
        { name: "class 4th", count: 45, alt: "patient icon" },

    ])

   

    return (
       <div className="row">
        <div className="col-2">
        <SideBar/>
    
        </div>
     <div className="col-10" style={{
        display:"flex",
        flexWrap:"wrap"
     }} >

{
    data.map((data) => (
        <div style={{
            width: "18vw", height: "25vh", borderRadius: 10,
            boxShadow: "3px  3px  5px rgb(50,50,50,0.7)",
            margin: "20px 0 100px 50px",
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            backgroundColor:"rgb(79, 189, 186)",

        }}>

            <center style={{ marginTop: 30 }}> <h4>{data.name}</h4>
                <h6> {data.count}</h6>
          <>    
              <Link  state={{className:data.name}}  to="/view"><button class="btn btn-outline-dark" style={{ borderRadius: 7, marginTop: 10 }}><b>View</b></button></Link>
                <Link state={{className:data.name}}  to="/studentform"><button class="btn btn-outline-dark" style={{ borderRadius: 7, marginTop: 10 }}><b>Add Student</b></button></Link>
          
                </> 
            </center>

        </div>
    ))
}

</div>
</div>
            

          

        
    );
}
export default Classes;