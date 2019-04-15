import React from "react";

import { fetchPosts} from "../../services/postService";
import PostList from "./../Posts/PostList";
import { MainButton } from "../FloatingButton/MainButton";

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      filter: ""
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    return fetchPosts().then(posts =>
      this.setState({ posts: posts.reverse() })
    );
  }

  setFilter = str => {
    this.setState({ filter: str });
  };

  render() {
    const { posts, filter } = this.state;

    const filteredPosts = posts.filter(post => post.type === filter);

    return (
      <div className="row">
        <div className="col-2" />

        <PostList posts={filteredPosts.length !== 0 ? filteredPosts : posts} />

        <MainButton afterCreation={this.fetchPosts} />

        <div className="col-2">
          <div className="dropdown mt-4 sticky-top">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
            >
              Filter Posts
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <span
                className="dropdown-item"
                onClick={() => this.setFilter("text")}
              >
                Text
              </span>
              <span
                className="dropdown-item"
                onClick={() => this.setFilter("image")}
              >
                Image
              </span>
              <span
                className="dropdown-item"
                onClick={() => this.setFilter("video")}
              >
                Video
              </span>
              <div className="dropdown-divider" />
              <span
                className="dropdown-item"
                style={{ color: "red" }}
                onClick={() => this.setFilter("")}
              >
                All
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
