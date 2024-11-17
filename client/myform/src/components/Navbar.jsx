import React from 'react'
import '../assets/style/navbar.css'
import formlogo from '../assets/images/formlogo.jpeg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div id='logo'>
          <img src={formlogo} alt="" />
        </div>
        <ul>
            {/* <li><NavLink to="/test">Test</NavLink></li> */}
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/form">form</NavLink></li>
            <li><NavLink to="/studentdata">studentData</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar