import React from 'react'
import { NavLink } from 'react-router-dom'
import bitbooklogo from './../images/bitbooklogo.png'

const Header = () => {



    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark row justify-content-between">
                <div className="container">
                    <NavLink to='/' className="navbar-brand">
                        <img src={bitbooklogo} className=" mb-1" height="30px" alt="" />
                        itbook
                    </NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="selected">Feed</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link" activeClassName="selected">People</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link" activeClassName="selected">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header