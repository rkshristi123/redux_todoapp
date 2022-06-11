import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div
    style={{
  display:"flex",
 gap:"20px",
  margin:"auto"

    }} 
    >
      <Link to="/">Counter App</Link> 
    <Link to="/todos">Todo App</Link>
    </div>
  )
}

export default Navbar