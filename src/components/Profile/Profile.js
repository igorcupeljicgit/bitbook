import React from "react"
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>


                <div className="container mt-5">
                    <div className="row">
                        <div className=" card shadow-lg col-6 offset-3 text-center ">
                            <img src="https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/a33a73a7eb93460abdbe82b6afca7952.jpg" className="rounded-circle mt-5" alt="" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Name Surname</h5>
                                <Link to="/UpdatePage" className="btn text-white bg-secondary">Update Page</Link>

                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <div className="row">
                                    <div className="rounded-pill bg-secondary text-white col-5">
                                        <i class="fas fa-copyright blue">  number of posts</i>

                                    </div>
                                    <div className="rounded-pill bg-secondary text-white col-5 offset-2">
                                        <i class="fas fa-copyright">  number of comments</i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default Profile