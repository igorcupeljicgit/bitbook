import React from "react";
import { NavLink } from "react-router-dom";
import bitbooklogo from "./../images/bitbooklogo.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar navbar-dark row justify-content-between shadow">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src={bitbooklogo} height="26px" alt="" />
            <span>itbook</span>
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/feed"
                className="nav-link"
                activeClassName="selected"
              >
                Feed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/users"
                className="nav-link"
                activeClassName="selected"
              >
                People
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link"
                activeClassName="selected"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
