import React from 'react'
import fetchData from '../services/fetchData';
import { Link } from 'react-router-dom'

class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }


    componentWillMount() {
        fetchData(`/posts/${this.props.id}/comments`)
            .then(comments => this.setState({ comments }))
    }


    render() {
        const { type, content, id, sid } = this.props
        const { comments } = this.state


        const contentFrame = type === 'text' ? (
            <>
                <p>{content}</p>
                <div className="d-flex justify-content-between ">
                    <span className="badge badge-pill  badge-primary">{type} post</span>
                    <button className="badge badge-pill  badge-secondary"> {comments.length} comments</button>
                </div>
            </>
        ) : type === 'image' ? (
            <>
                <img src={content} className="rounded" width="100%" style={{ marginBottom: '10px' }} alt="" />
                <div className="d-flex justify-content-between ">
                    <span className="badge badge-pill  badge-info">{type} post</span>
                    <button className="badge badge-pill  badge-secondary"> {comments.length} comments</button>
                </div>
            </>
        ) : (
                    <>
                        <div className='videoWrap'>
                            <iframe src={content} title={sid} ></iframe>
                        </div>
                        <div className="d-flex justify-content-between ">
                            <span className="badge badge-pill  badge-danger">{type} post</span>
                            <button className="badge badge-pill  badge-secondary"> {comments.length} comments</button>
                        </div>
                    </>
                );
        return (
            <>

                <Link to={`/posts/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div id='postCard'>
                        {contentFrame}
                    </div>
                </Link>
            </>
        )
    }
}

export default Post