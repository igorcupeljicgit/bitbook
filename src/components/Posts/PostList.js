import React from 'react'
import Post from '../../entities/Post'
import "../FloatingButton/floatingButtonCss.css";
import "../modal/Modal.css"

class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {


        return (
            <div className='row'>
                <div className='col-2'>   </div>
                <div className='col-8'>
                    {this.props.posts.map(post => <Post key={post.id} id={post.id} type={post.type} content={post.type === 'text' ? post.text : post.type === 'image' ? post.imageUrl : post.videoUrl} />)}


                </div>






            </div>
        )


    }
}










export default PostList