import React from 'react'
import fetchData from '../../services/fetchData';
import CommItem from './CommItem';
import './../../images/noComments.jpg'



class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        fetchData(`/posts/${this.props.id}/comments`)
            .then(comments => this.setState({ comments }))
    }




    render() {
        const { comments } = this.state
        console.log(this.state.comments);
        if (!comments) {
            return <img src='./noComments.jpg' /> // NE VALJA
        }
        return (
            <div className="m-3">
                <div className='text-center'>
                    <input id='postComm' type='text' placeholder='Comment' name='comment' className='form-control'></input>
                    <button type="button" class="btn btn-primary">Post</button>
                </div>
                {comments.map((obj) => {
                    return <CommItem key={obj.id} comment={obj} user={obj.userId} />
                })}
            </div>
        )
    }
}

export default Comments