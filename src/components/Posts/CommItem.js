import React from 'react'
import fetchData from '../../services/fetchData';

class CommItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        fetchData(`/users/${this.props.user}`)
            .then(user => this.setState({ user }))
    }



    render() {
        const { comment } = this.props
        const { user } = this.state

        console.log(user);

        const firstName = user.name ? user.name.first : ''

        return <div className="card mb-3 customCard" >
            <div className="row no-gutters">
                <div className="col-md-2 text-center">
                    <img src={user.avatarUrl} className="card-img" style={{ borderRadius: '50%', maxWidth: '5em' }} alt="..." />
                    <h5 className="card-title text-center m-0">{firstName}</h5>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">{comment.body}</p>
                        <p className="card-text"><small className="text-muted">{new Date(comment.createdAt).toDateString()}</small></p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CommItem