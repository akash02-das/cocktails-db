import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active-nav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-nav">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
