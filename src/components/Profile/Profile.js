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
                        <div className="col-4"></div>
                        <div className="col-4"><img href="https://d3ieicw58ybon5.cloudfront.net/ex/350.350/shop/product/a33a73a7eb93460abdbe82b6afca7952.jpg" alt=""></img></div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <p><b>Myname MySurname</b></p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore, quidem quas aut possimus tempore aspernatur dignissimos officia quos ipsam. Accusamus voluptas ipsa natus ducimus odio voluptatibus autem et ullam.</p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <p>PostsPlaceholder, CommentsPlaceholder</p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Link to="/UpdatePage"><button type="button" className="profileButtonSubmit">Update Profile</button></Link>
                        </div>
                        <div className="col-4"></div>
                    </div>


                </div>
            </>
        )
    }
}

export default Profile