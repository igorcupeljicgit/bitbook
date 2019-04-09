import React from "react"
import { Link } from 'react-router-dom'
import fetchData from "../../services/fetchData"
import User from '../../entities/User'


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        fetchData("/users/2/?_embed[]=comments&_embed[]=posts")
            .then((element) => {
                return new User(element.id, element.avatarUrl, element.name.first, element.name.last, element.about.bio, element.about.job, element.about.countryCode, element.comments, element.posts)

            })


            .then((user) => {
                this.setState({
                    user
                })
                console.log(user)
            })




    }
    render() {
        if (!this.state.user.id) {
            return <p>Loading</p>
        }
        const user = this.state.user
        return (
            <>


                <div className="container mt-4" key={user.id}>
                    <div className="row">
                        <div className=" card shadow-lg col-6 offset-3 text-center ">
                            <img src={user.img} className="profileheight rounded-circle ml-5 mr-5 mt-2 " alt="" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                <Link to="/UpdatePage" className="btn text-white bg-secondary">Update Page</Link>

                                <p className="card-text"><b>About:</b> {user.about}<br /><b>Position:</b> {user.position}<b> Company:</b>{user.company}
                                </p>
                                <div className="row">
                                    <div className="rounded-pill bg-secondary text-white col-5">
                                        <i className="fas fa-copyright blue">Number of posts {user.posts.length}</i>

                                    </div>
                                    <div className="rounded-pill bg-secondary text-white col-5 offset-2">
                                        <i className="fas fa-copyright">  number of comments {user.comments.length}</i>
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