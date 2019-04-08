import React from "react"
import { Link } from 'react-router-dom'

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>


                <div className="container">
                    <div className="row">
                        <div className="card col-4-sm4   ">
                            <img src="https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/a33a73a7eb93460abdbe82b6afca7952.jpg" className="figure-img img-fluid rounded" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Name Surname</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="/UpdatePage" className="btn btn-primary">Update Page</Link>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }
}

export default Profile