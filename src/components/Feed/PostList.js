import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {

    return (
        <div>
            {posts.map(post => <Post key={post.id} type={post.type} content={post.type === 'text' ? post.text : post.type === 'image' ? post.imageUrl : post.videoUrl} />)}
        </div>
    )
}

export default PostList