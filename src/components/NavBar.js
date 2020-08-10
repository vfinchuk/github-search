import React from 'react'
import {NavLink} from 'react-router-dom'

export const NavBar = () => (
  <nav className="navbar navbar-dark navbar-expand-md bg-primary">
    <div className="navbar-brand">Github search</div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={'/'} className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/about'} className="nav-link">Information</NavLink>
      </li>
    </ul>
  </nav>
)
