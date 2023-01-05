import { useState,useEffect } from "react";
import { getStudent } from "../api";
import Table from 'react-bootstrap/Table';
import { useLocation, useNavigate } from "react-router-dom";



function StudentMap() {

  
    const location=useLocation();
    const className=location.state?.className;


    const[data,setData]=useState([]);
    const [classNam,setClassNam]=useState("");

 useEffect(()=>{

    getData();

   
  

  
  const classNa=className?className:"";

  setClassNam(classNa);
 },[]);

    const getData=async()=>{


        const result=getStudent();

        setData((await result).data);
    }
    return ( 


        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Cell</th>
          </tr>
        </thead>

        {


data.filter((data)=>data.className===classNam).map((data,index)=>(

<tbody>
    

<tr>
<td></td>
   
  <td>{data.name}</td>
  <td>{data.fatherName}</td>
  <td>{data.cell}</td>
</tr>

</tbody>

))

        }
     

    
      </Table>
     );
}

export default StudentMap;