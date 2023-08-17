import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Requests() {
  const [listOfRequests, setListOfRequests] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:3001/requests").then((response) => {
      setListOfRequests(response.data);
    });
  }, []);

 
        return (
               <div >
    <p className='para'>Total number of requests: {listOfRequests.length}</p>

                 <table className="table table-bordered table-responsive table-hover">
          <thead className="table-info">
      <tr>
        <th scope="col">Request Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Requirement</th>
        <th scope="col">Department</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
      </tr>
      </thead>
                  {listOfRequests.slice(0).reverse().map((value, key) => {
                    
                   
                    return (
                    
                        <tbody key={key} >
                        <tr onClick={() => {
                           navigate(`/request/${value.id}`);
                         }}>
                          <td> {value.id}</td>
                          <td> {value.Name}</td>
                          <td>{value.email}</td>
                          <td >{value.Requirement}</td>
                          <td>{value.Department}</td>
                          <td>{value.createdAt.slice(0,10)}</td>
                          <td>{value.createdAt.slice(11,19)}</td>
                        </tr>
                        </tbody>
                  )
                       
                        
                })}
                    </table>
                      </div>
                    );
           
} 

export default Requests;