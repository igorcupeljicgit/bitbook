import React from "react";

import MainButton from "../FloatingButton/MainButton";
import fetchData from "../../services/fetchData";
import PostList from "./../Posts/PostList";

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetchData("/posts").then(posts =>
      this.setState({ posts: posts.reverse() })
    );
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        <PostList posts={posts} />
        <MainButton afterCreation={this.fetchPosts} />
      </>
    );
  }
}

export default Feed;
