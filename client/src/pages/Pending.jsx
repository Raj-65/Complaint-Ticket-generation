
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Pending() {
  const [listOfPending, setListOfPending] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/pending").then((response) => {
      setListOfPending(response.data);
    });
  }, []);

  return (
    <div >
    <p className='para'>Number of Pending complains: {listOfPending.length}</p>

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
       navigate(`/complain/${value.C_id}`);
     }}>
      <td> {value.C_id}</td>
      <td> {value.Name}</td>
      <td>{value.email}</td>
      <td className="td-inline-block text-truncate" style={{maxWidth: "350px"}}>{value.ComplainDetail}</td>
      <td>{value.Department}</td>
      
    </tr>
    </tbody>
    );
})}
    </table>
</div>
);
}

export default Pending;

 