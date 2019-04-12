import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: "nav-link",
      isActive2: "nav-link  active",
      isActive3: "isShowing",
      isActive4: " isNotShowing"
    };
  }
  switchClass = () => {
    this.setState({
      isActive: "nav-link ",
      isActive2: "nav-link active",
      isActive3: " isShowing",
      isActive4: " isNotShowing"
    });
  };
  switchClass2 = () => {
    this.setState({
      isActive: "nav-link active",
      isActive2: "nav-link ",
      isActive3: " isNotShowing",
      isActive4: " isShowing"
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6 text-white">
          <h2>Bitbook</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-6 ">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a
                    className={`nav-link ${this.state.isActive2}`}
                    onClick={this.switchClass}
                    href="#"
                  >
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link ${this.state.isActive}`}
                    onClick={this.switchClass2}
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body">
              <div className={this.state.isActive3}>
                <div className="row">
                  <div className="col-6">
                    <label>Email:</label>
                  </div>
                  <div className="col-6">
                    <input type="text" placeholder="enter email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label>Password:</label>
                  </div>
                  <div className="col-6">
                    <input type="text" placeholder="enter password" />
                  </div>
                </div>
                <div className="row">
                  <a href="#" className="btn btn-primary">
                    Login
                  </a>
                </div>
              </div>
              <div className={this.state.isActive4}>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <label>Username:</label>
                  </div>
                  <div className="col-6">
                    <input type="text" placeholder="enter Username" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <label>Email</label>
                  </div>
                  <div className="col-6">
                    <input type="text" placeholder="enter email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    {" "}
                    <label>Password:</label>
                  </div>
                  <div className="col-6">
                    <input type="text" placeholder="enter password" />
                  </div>
                </div>
                <div className="row">
                  <a href="#" className="btn btn-primary">
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
