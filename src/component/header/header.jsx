import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className="headerStyle">
     <div>
        <h3 className='logo'>TripPlanner</h3>
     </div>
        <ul className="navStyle">
          <li  className="navItemStyle">
            <NavLink to="/" className="linkStyle">Home</NavLink>
          </li>
          <li  className="navItemStyle">
            <NavLink to="/planner"  className="linkStyle">Your Trip</NavLink>
          </li>
          <li  className="navItemStyle">
            <NavLink to={"/todo"} className="linkStyle">Community</NavLink>
          </li>
          <li className="navItemStyle">
            <NavLink to={"/about"} className="linkStyle">About</NavLink>
          </li>
          <li className="navItemStyle">
            <NavLink to={"/contact"} className="linkStyle">Contact</NavLink>
          </li>
        </ul>
    </div>
  );
}

