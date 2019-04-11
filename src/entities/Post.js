import React from 'react'
import fetchData from '../services/fetchData';
import { Link } from 'react-router-dom'
import deletePost from '../services/deletePost';

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }


    componentDidMount() {
        this.getComments()
    }

    getComments() {
        return fetchData(`/posts/${this.props.id}/comments`)
            .then(comments => this.setState({ comments }))
    }

    deletePost(postId, e) {
        e.preventDefault()

        deletePost(postId)
    }


    render() {
        const { type, content, id, userId, sid } = this.props
        const { comments } = this.state


        const contentFrame = type === 'text' ? (<p>{content}</p>) : type === 'image' ? (

            <img src={content} className="rounded" width="100%" style={{ marginBottom: '10px' }} alt="" />

        ) : (
                <div className='videoWrap'>
                    <iframe src={content} title={sid} ></iframe>
                </div>
            );

        return (
            <>

                <Link to={`/posts/${id}`} style={{ textDecoration: 'none', color: 'black', zIndex: '0' }}>
                    <div className='shadow customCard'>
                        {contentFrame}
                        <div className="d-flex justify-content-between ">
                            <span className={`badge badge-pill badge-${type === 'text' ? 'primary' : type === 'image' ? 'warning' : 'danger'}`}>{type}</span>
                            <span>
                                <span className="badge badge-pill badge-secondary"> {comments.length} comments</span>
                                {/* {userId == '2' ?  */}
                                <span className="trashcan" onClick={(e) => this.deletePost(id, e)}><i className="far fa-trash-alt ml-3" style={{ zIndex: '1' }}></i></span>
                                {/* : <></>} */}
                            </span>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default Post