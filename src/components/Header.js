import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {



    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark row justify-content-between">
                <div className="container ">
                    <NavLink className="navbar-brand ">bitbook</NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="selected">Feed</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="selected">People</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="selected">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header