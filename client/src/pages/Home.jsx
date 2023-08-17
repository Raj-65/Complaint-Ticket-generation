import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfComplains, setListOfComplains] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:3001/complains").then((response) => {
      setListOfComplains(response.data);
    });
  }, []);

 
        return (
               <div >
    <p className='para'>Total number of complains: {listOfComplains.length}</p>

                 <table className="table table-bordered table-responsive table-hover">
          <thead className="table-info">
      <tr>
        <th scope="col">Complain Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Complaint Detail</th>
        <th scope="col">Department</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Hours passed</th>
      </tr>
      </thead>
                  {listOfComplains.slice(0).reverse().map((value, key) => {
                    let start_date=new Date(`${value.createdAt.slice(0,10)}T${value.createdAt.slice(11,19)}`);
                    let currentdate=new Date();
                    const diffTime = (currentdate.getTime() - start_date.getTime())/1000; 
                    const diffHours = Math.floor(Math.abs(diffTime /  3600 ));
                 
                    return (
                   
                        <tbody key={key} >
                        <tr onClick={() => {
                           navigate(`/complain/${value.id}`);
                         }}>
                          <td> {value.id}</td>
                          <td> {value.Name}</td>
                          <td>{value.email}</td>
                          <td className="td-inline-block text-truncate" style={{maxWidth: "350px"}}>{value.ComplainDetail}</td>
                          <td>{value.Department}</td>
                          <td>{value.createdAt.slice(0,10)}</td>
                          <td>{value.createdAt.slice(11,19)}</td>
                          <td>{diffHours}</td>
                        </tr>
                        </tbody>
                  )
                       
                        
                })}
                    </table>
                      </div>
                    );
     
} 

export default Home;