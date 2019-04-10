import React from "react"
import fetchSingleUser from "../../services/fetchSingleUser"
import Modal from '../../components/modal/Modal';




class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            isShowing: false
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
    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    onUpdateSuccess = () => {
        this.setState({
            isShowing: false
        });
        this.fetchUser()
    }

    render() {
        if (!this.state.user.id) {
            return <p>Loading</p>
        }
        const user = this.state.user
        return (
            <>


                <div className="container mt-4" key={user.id}>
                    {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                    <div className="row justify-content-center">
                        <div className="card shadow-lg col-6">
                            <div className="col text-center">
                                <img src={user.img} className="mt-4" style={{ borderRadius: '50%', width: '50%' }} alt="" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                {user.id === 2 ? <button className="btn text-white bg-secondary mb-3" onClick={this.openModalHandler}>Update profile</button> : ""}

                                <p className="card-text"><b>About:</b> {user.about}<br /><b>Position:</b> {user.position}<b className="ml-3"> Country code:</b>{user.company}
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
                        <Modal
                            className="modal"
                            show={this.state.isShowing}
                            close={this.closeModalHandler}
                            onUpdateSuccess={this.onUpdateSuccess}
                        >

                        </Modal>
                    </div>

                </div >



            </>
        )
    }
}

export default Profile