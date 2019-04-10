import React from 'react'
import fetchData from '../../services/fetchData';
import Comments from './Comments';

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null
        }
    }

    loadPostData() {
        fetchData(`/posts/${this.props.match.params.id}`)
            .then(post => this.setState({ post }))
    }

    componentDidMount() {
        this.loadPostData()
    }

    mainContent() {
        const { type } = this.state.post


        return type === 'text' ? (
            <p>{this.state.post.text}</p>
        ) : type === 'image' ? (
            <img src={this.state.post.imageUrl} className="rounded" width="100%" style={{ marginBottom: '10px' }} alt="" />
        ) : (
                    <div className='videoWrap'>
                        <iframe src={this.state.post.videoUrl} title={this.state.post.sid} ></iframe>
                    </div>
                );
    }

    render() {
        const { post } = this.state
        console.log(post);

        if (!post) {
            return <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
        return (
            <div className='container-fluid col-lg-8'>
                <div id='postCard'>
                    {this.mainContent()}
                </div>
                <Comments id={post.id} />
            </div>
        )
    }
}

export default PostPage