import React from 'react'
import Post from '../../entities/Post'

const PostList = ({ posts }) => {

    let tempArray = posts;
    let reversed = tempArray.reverse();

    return (
        <div className='row'>
            <div className='col-2'>   </div>
            <div className='col-8'>
                {reversed.map(post => <Post key={post.id} id={post.id} type={post.type} content={post.type === 'text' ? post.text : post.type === 'image' ? post.imageUrl : post.videoUrl} />)}
            </div>
        </div>
    )
}

export default PostList