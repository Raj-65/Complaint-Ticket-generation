import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router';



function WithNav() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default WithNav
