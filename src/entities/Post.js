import React from "react";
import fetchData from "../services/fetchData";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post: [],
      isShowing: false
    };
  }

  componentWillMount() {
    fetchData(`/posts/${this.props.id}/comments`).then(comments =>
      this.setState({ comments })
    );
    this.setState({
      isShowing: false
    });
  }
  onUpdateSuccess = () => {
    this.setState({
      isShowing: false
    });
    this.fetchData(`/posts`).then(post => this.setState({ post }));
  };

  render() {
    const { type, content, id, sid } = this.props;
    const { comments } = this.state;

    const contentFrame =
      type === "text" ? (
        <p>{content}</p>
      ) : type === "image" ? (
        <img
          src={content}
          className="rounded"
          width="100%"
          style={{ marginBottom: "10px" }}
          alt=""
        />
      ) : (
        <div className="videoWrap">
          <iframe src={content} title={sid} />
        </div>
      );

    return (
      <>
        <Link
          to={`/posts/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="shadow customCard">
            {contentFrame}
            <div className="d-flex justify-content-between ">
              <span
                className={`badge badge-pill badge-${
                  type === "text"
                    ? "primary"
                    : type === "image"
                    ? "warning"
                    : "danger"
                }`}
              >
                {type}
              </span>
              <span className="badge badge-pill badge-secondary">
                {" "}
                {comments.length} comments
              </span>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default Post;
