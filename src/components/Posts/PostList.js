import React from "react";
import Post from "./Post";
import "../FloatingButton/floatingButtonCss.css";
import "../modal/Modal.css";
import MainButton from "../FloatingButton/MainButton";

const PostList = (props) => {

  return (
    <div className="post-list">
      {props.posts.map(post => (
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
          handleDelete={props.handleDelete}
          fetchPosts={props.fetchPosts}
        />
      ))}
      <MainButton afterCreation={props.fetchPosts} />
    </div>
  );
}

export default PostList;
