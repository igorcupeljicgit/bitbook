import React from "react";
import Post from "./Post";
import "../FloatingButton/floatingButtonCss.css";
import "../modal/Modal.css";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }
render(){
  const { posts } = this.props

  return (
    <div className="col-8">
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          userId={post.userId}
          type={post.type}
          content={
            post.type === "text"
              ? post.text
              : post.type === "image"
                ? post.imageUrl
                : post.videoUrl
          }
          handleDelete={this.props.handleDelete}
          fetchPosts={this.props.fetchPosts}
        />
      ))}
    
    </div>
  );
}
}

export default PostList;
