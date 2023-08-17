import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Owned() {
  const [listOfOwned, setListOfOwned] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/owned").then((response) => {
      setListOfOwned(response.data);
    });
  }, []);

  return (
    <div >
    <p className='para'>Number of Owned complains: {listOfOwned.length}</p>

    <table className="table table-bordered table-responsive table-hover">
      <thead className="table-warning">
  <tr>
    <th scope="col">Complain Id</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Complaint Detail</th>
    <th scope="col">Department</th>
    <th scope="col">Owned BY</th>
  
  </tr>
  </thead>
                  {listOfOwned.slice(0).reverse().map((value, key) => {

return (
  <tbody key={key} >
    <tr onClick={() => {
       navigate(`/complain/${value.ComplainId}`);
     }}>
      <td> {value.ComplainId}</td>
      <td> {value.Name}</td>
      <td>{value.email}</td>
      <td className="td-inline-block text-truncate" style={{maxWidth: "350px"}}>{value.ComplainDetail}</td>
      <td>{value.Department}</td>
      <td>{value.AssignedTo}</td>
    
    </tr>
    </tbody>
  );
})}
    </table>

</div>
);
}

export default Owned;

