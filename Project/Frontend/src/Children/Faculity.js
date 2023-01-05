
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {addStudent } from "../api";
// import "./form.css"
// function facultyForm () {
 
//   const location=useLocation();
//   const className=location.state?.className;

//    const navigate=useNavigate();
// console.log(className?className:"");

// const classNa=className?className:"";


//   const[data,setData]=useState(
    
//     {
//      name:"",
//      fatherName:"",
//      cell:"",
//      className:classNa
   
  


//     }
//   );


//   const GetData=(d)=>{
//     console.log(d.target.name+"   :   "+d.target.value);
//     setData({...data,[d.target.name]:d.target.value});


//   }

//   const SubmitData=(e)=>{
// e.preventDefault();

// addStudent(data);
// navigate("/student");

//   }
//   useEffect(()=>{


//      })
//       return ( 
//         <div class="form-main">
//            <div class="row">
//              <div class="form-holder">
//                <div class="form-content">
//                   <div class="form-items">
//                       <h3>Register Student</h3>
//                         <p>Fill in the data below.</p>
//                          <form class="requires-validation" novalidate>
//                            <div class="col-md-12">
//                              <input class="form-control" type="text" name="name" placeholder="Full Name"
//                              onChange={(e)=>GetData(e)}
//                              />
//                            <div class="valid-feedback">Username field is valid!</div>
//                           <div class="invalid-feedback">Username field cannot be blank!</div>
//                          </div>
//                       <div class="col-md-12">
//                     <input  type="text" name="fatherName" placeholder="Father Name"  
//                     onChange={(e)=>GetData(e)}
//                     />
//                  <div class="valid-feedback">Father Name field is valid!</div>
//                 <div class="invalid-feedback">Father Name field cannot be blank!</div>
//             </div>
//                 <div class="col-md-12">
//                   <select class="form-select mt-3" required>
//                     <option selected disabled value="">Section</option>
//                       <option value="P">A</option>
//                         <option value="M">B</option>
//                          <option value="M">C</option>
//                            <option value="I">D</option>   
//                              </select>
//                             <div class="valid-feedback">You selected a position!</div>
//                         <div class="invalid-feedback">Please select a position!</div>
//                     </div>
//                     <br></br>
//                          <div class="col-md-12">
//                             <input class="form-control" type="number" name="cell" placeholder="Cell"  onChange={(e)=>GetData(e)}/>
//                                <div class="valid-feedback">Cell field is valid!</div>
//                                  <div class="invalid-feedback">Cell field cannot be blank!</div>
//                                     </div>
//                                       <div class="col-md-12 mt-3">
//                                         <label class="mb-3 mr-1" for="gender">Gender: </label>
//                                           <input type="radio" class="btn-check" name="gender" id="male" autocomplete="off" required/>
//                                             <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>
//                                               <input type="radio" class="btn-check" name="gender" id="female" autocomplete="off"  onChange={(e)=>GetData(e)}/>
//                                                 <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>
//                                                   <input type="radio" class="btn-check" name="gender" id="secret" autocomplete="off" required/>
//                                                 <label class="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
//                                               <div class="valid-feedback mv-up">You selected a gender!</div>
//                                            <div class="invalid-feedback mv-up">Please select a gender!</div>
//                                       </div>
//                                     <div class="form-check">
//                                  <input class="form-check-input" type="checkbox" value="" id="invalidCheck"  onChange={(e)=>GetData(e)}/>
//                               <label class="form-check-label">I confirm that all data are correct</label>
//                            <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
//                         </div>
//                     <div class="form-button mt-3">
//                 <button id="submit" type="submit" class="btn btn-primary" onClick={SubmitData}>Register</button>
//             </div>
//          </form>
//     </div>
// </div>
//    </div>
//       </div>
//          </div>
//                );
//                   }

// export default facultyForm;