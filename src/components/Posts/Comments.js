import React from 'react'

import fetchData from '../../services/fetchData';
import CommItem from './CommItem';
import noComment from './../../images/noComments.jpg'
import postComm from '../../services/postComm';


class Comments extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            commentInput: ""
        }
    }

    componentDidMount() {
        this.fetchComments()
    }

    fetchComments() {
        fetchData(`/posts/${this.props.id}/comments`)
            .then(comments => this.setState({ comments: comments.reverse() }))
    }

    newComm = (e) => {
        e.preventDefault()

        const { commentInput } = this.state

        if (!commentInput.length) {
            return
        }
        postComm(this.props.id, commentInput)
            .then(() => {
                this.fetchComments();
                this.setState({ commentInput: '' })
            })
    }

    handleCommentInput = (e) => {
        const commentInput = e.target.value
        this.setState({
            commentInput
        })
    }


    render() {
        const { comments } = this.state;

        if (!comments) {
            return <img src={noComment} alt="" />
        }
        return (
            <div className="m-3">
                <div className='text-center'>
                    <form action="" onSubmit={this.newComm}>
                        <input id='inputLine' type='text'
                            placeholder='Add a comment...'
                            onChange={this.handleCommentInput}
                            name='comment'
                            value={this.state.commentInput}
                            className='form-control' />
                        <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                </div>
                {comments.map((obj) => {
                    return <CommItem key={obj.id} comment={obj} user={obj.userId} />
                })}
            </div>
        )
    }
}

export default Comments