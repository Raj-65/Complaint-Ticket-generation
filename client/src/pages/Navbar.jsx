import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar=()=> {
  return (
    <div className="nav sticky-top">
    <NavLink to="/admin"> All Complains</NavLink>
    <NavLink to="/owned"> Owned Complains</NavLink>
    <NavLink to="/pending">Pending Complains</NavLink>
    <NavLink to="/completed"> Solved Complains</NavLink>
    <NavLink to="/report">Complain Report</NavLink>
    <NavLink to="/request">All Requirement</NavLink>
    <NavLink to="/ownedreq">Owned Requirement</NavLink>
    <NavLink to="/pendingreq">Pending Requirement</NavLink>
    <NavLink to="/completedreq">Completed Requirement</NavLink>
    </div>
  )
}

export default Navbar
