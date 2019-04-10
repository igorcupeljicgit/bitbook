import React from "react"
import { Link } from 'react-router-dom'
import fetchSingleUser from "../../services/fetchSingleUser"


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser() {
        const userId = this.props.match.params.id || 2;
        console.log(userId);
        fetchSingleUser(userId)
            .then((user) => {
                console.log(user)
                this.setState({
                    user
                })

            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchUser()
        }
    }

    render() {
        if (!this.state.user.id) {
            return <p>Loading</p>
        }
        const user = this.state.user
        return (
            <>


                <div className="container mt-4" key={user.id}>
                    <div className="row justify-content-center">
                        <div className="card shadow-lg col-6">
                            <div className="col text-center">
                                <img src={user.img} className="mt-4" style={{ borderRadius: '50%', width: '50%' }} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                {user.id === 2 ? <Link to="/UpdatePage" className="btn text-white bg-secondary mb-3">Update Page</Link> : ""}

                                <p className="card-text"><b>About: </b>{user.about}<br /><b>Position: </b>{user.position}<b className="ml-3"> Company: </b>{user.company}
                                </p>
                                <div className="row justify-content-center">
                                    <div className="chips">
                                        <div className="chip">
                                            <div className="chip-icon">{user.posts.length}</div>posts
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="chips">
                                        <div className="chip">
                                            <div className="chip-icon">{user.comments.length}</div>comments
                                        </div>
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