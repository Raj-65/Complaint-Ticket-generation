import React from 'react'
import { useNavigate } from "react-router-dom";

function User() {
  let navigate = useNavigate();


  const handleClick = () => {
    navigate("/createcomplain")
  }
  const handleC = () => {
    navigate("/createreq")
  }
  return (
    <>  
    <div className="nav " style={{backgroundColor:"#79E0EE"}}>
    
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" style={{paddingLeft:"#35px"}}>
        <span className="fs-4" style={{fontWeight:"600"}} >SmartLink Holdings</span>
      </a>
     </div>
   
   <h1 class="visually-hidden">Heroes examples</h1>

<div className="px-4 py-5 my-5 text-center">
  <h1 className="display-5 fw-bold text-body-emphasis">Engineering Department</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4"></p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"  style={{padding:"3rem"}}>
      <button type="button" className="btn btn-primary btn-lg px-4 gap-3" 
      style={{ width: "250px", height: "75px"}}
       onClick={handleClick}>File a Complain</button>
      <button type="button"  style={{ width: "250px", height: "75px"}}
      onClick={handleC} className="btn btn-outline-secondary btn-lg px-4">New Requirement</button>
    </div>
  </div>
</div>
    </>
  )
}

export default User
