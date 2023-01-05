import axios from "axios";

const url="http://localhost:3200";

export const addApplication= async (data) => {


   await axios.post(`${url}/start`,data);



}


export const addSchool= async (data) => {


   await axios.post(`${url}/school`,data);



}

export const addStudent= async (data) => {


   await axios.post(`${url}/studentform`,data);



}






export const getStudent=async()=>{

   return await axios.get(`${url}/view`)
}


