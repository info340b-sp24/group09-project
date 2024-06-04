import React from 'react';
import './header.css'; 
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className="headerStyle">
      <div>
        <h3 className='logo'>TripPlanner</h3>
      </div>
      <nav className="navbar navbar-expand-md ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navStyle">
            <li className="navItemStyle">
              <NavLink to="/" className="linkStyle">Home</NavLink>
            </li>
            <li className="navItemStyle">
              <NavLink to="/planner" className="linkStyle">Your Trip</NavLink>
            </li>
            <li className="navItemStyle">
              <NavLink to={"/todo"} className="linkStyle">Community</NavLink>
            </li>
            <li className="navItemStyle">
              <NavLink to={"/about"} className="linkStyle">About</NavLink>
            </li>
            <li className="navItemStyle">
              <NavLink to={"/contact"} className="linkStyle">Contact</NavLink>
            </li>
            <li className="navItemStyle">
              <NavLink to={"/form"} className="linkStyle">Form</NavLink>
            </li>
            <li className="navItemStyle">
              <NavLink to={"/Login"} className="linkStyle">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

