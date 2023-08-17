import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function CompletedReq() {
  const [listOfResolved, setListOfResolved] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/ReqSolv").then((response) => {
      setListOfResolved(response.data);
    });
  }, []);

  return (
    <div>
  <p className='para'>Number of Resolved requests: {listOfResolved.length}</p>

     <table className="table table-bordered table-responsive table-hover">
     <thead className="table-success">
      <tr>
        <th scope="col">Request Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Requirement</th>
        <th scope="col">Department</th>
        <th scope="col">AssignedTo</th>
        <th scope="col">Remarks</th>
        <th scope="col">InventoryUsed</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Completed in (Hrs.)</th>

      </tr>
      </thead>
      {listOfResolved.slice(0).reverse().map((value, key) => {
let start_date=new Date(`${value.registered.slice(0,10)}T${value.registered.slice(11,19)}`);
let end_date=new Date(`${value.createdAt.slice(0,10)}T${value.createdAt.slice(11,19)}`);

const diffTime = (end_date.getTime() - start_date.getTime())/1000; 
const diffHours = Math.floor(Math.abs(diffTime /  3600 ));
return (
   <tbody key={key}>
      <tr>
      <td> {value.ReqId}</td>
        <td> {value.Name}</td>
        <td>{value.email}</td>
        <td >{value.Requirement}</td>
        <td>{value.Department}</td>
        <td>{value.AssignedTo}</td>
        <td>{value.Remarks}</td>
        <td>{value.InventoryUsed}</td>
        <td>{value.registered.slice(0,10)}</td>
        <td>{value.registered.slice(11,19)}</td>
        <td>{diffHours}</td>
      </tr>
      </tbody>
)
     
    })}
      
  </table>

    </div>
  )
}

export default CompletedReq
