import React from "react";
import { NavLink } from "react-router-dom";
import bitbooklogo from "./../images/bitbooklogo.png";
import { Auth } from "../services/AuthService";
import { withRouter } from 'react-router'
import { fetchSingleUser } from '../services/userService'
import Avatar from './Avatar'

class Header extends React.Component {
  constructor () {
    super()

    this.state={
      user: {}
    }
  }


  componentDidMount() {
    fetchSingleUser(Auth.getUserId())
      .then(user => this.setState({ user }))
  }
  
  removeToken = () => { 
    Auth.logout();
    this.props.history.push('/');
  };

  render () {

    return (
    <header>
      <nav className="navbar navbar-expand navbar navbar-dark row justify-content-between shadow">
        <div className="container">
          <NavLink to="/feed" className="navbar-brand">
            <img src={bitbooklogo} height="26px" alt="" />
            <span>itbook</span>
          </NavLink>
          <ul className="navbar-nav d-flex flex-row align-items-center flex-wrap">
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
            <li className="nav-item ml-2">
              <div className="col-2 p-0" style={{ cursor: "pointer" }}>
                <div className="dropdown p-0" style={{ width: "35px" }}>
                  <span
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Avatar src={this.state.user.img} size="30px" shape="round" outline="white" />
                  </span>
                  <div className="dropdown-menu dropdown-menu-right" style={{ zIndex: "1040 !important" }} aria-labelledby="dropdownMenuButton">                    
                    <span>
                    <NavLink
                      to="/profile"
                      className="dropdown-item"
                    >
                    <i className="far fa-user mr-2"></i>
                      Profile
                    </NavLink>
                    </span>
                    <div className="dropdown-divider" />
                    <span>
                    <NavLink
                      to="/"
                      id="userLogOut"
                      className="dropdown-item"
                      onClick={this.removeToken}
                      style={{ color: "red" }}
                      >
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Log out
                    </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )}
}

export default withRouter(Header);
