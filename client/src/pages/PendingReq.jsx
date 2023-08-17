
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PendingReq() {
  const [listOfPending, setListOfPending] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/pendingreq").then((response) => {
      setListOfPending(response.data);
    //   console.log(response.data);
    });
  }, []);

  return (
    <div >
    <p className='para'>Number of Pending requests: {listOfPending.length}</p>

        <table className="table table-bordered table-responsive table-hover">
          <thead className="table-danger">
      <tr>
        <th scope="col">Complain Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Complaint Detail</th>
        <th scope="col">Department</th>
       
      </tr>
      </thead>
                  {listOfPending.slice(0).reverse().map((value, key) => {

return (
    <tbody key={key} >
    <tr onClick={() => {
       navigate(`/request/${value.C_id}`);
     }}>
      <td> {value.C_id}</td>
      <td> {value.Name}</td>
      <td>{value.email}</td>
      <td >{value.Requirement}</td>
      <td>{value.Department}</td>
     
    </tr>
    </tbody>
    );
})}
    </table>
</div>
);
}

export default PendingReq;

 