import React, { useState } from 'react';
import axios from 'axios';


function Report() {
    const [sdateInput, setsDateInput] = useState('');
    const [edateInput, seteDateInput] = useState('');
    const [count, setCount] = useState(0);
    const [fin, setFin] = useState(0);
    const [wit, setWit] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3001/repA", {
        params: { startDate: sdateInput ,
         endDate: edateInput },
      });
      const res = await axios.get("http://localhost:3001/repS", {
        params: { startDate: sdateInput ,
         endDate: edateInput },
      });
      const resp = await axios.get("http://localhost:3001/repW", {
        params: { startDate: sdateInput,endDate: edateInput},
      });
    //   console.log(sdateInput);
    //   console.log(edateInput);
    //   console.log(response.data); // Do something with the response
    //   console.log(res.data); // Do something with the response
      
      setCount(response.data); 
      setFin(res.data); 
      setWit(resp.data); 
    } catch (error) {
      console.error(error);
    }
  };
    return (<>
        <form className="form" onSubmit={handleSubmit}>
          <label className="co">Start Date:</label>
          <input className="co"
            type="date"
            value={sdateInput}
            onChange={(e) => setsDateInput(e.target.value)}
          />
          <label className="co" >End Date:</label>
          <input className="co"
            type="date"
            value={edateInput}
            onChange={(e) => seteDateInput(e.target.value)}
          />
          <button className="co" type="submit">Submit</button>
        </form>
        
       <p>Total complaints registered : {count.length }</p>
       <p>Total complaints solved : {fin.length }</p>
       <p>Total complaints solved in 48 Hrs : {wit.length }</p>
        </>
      );
}

export default Report
