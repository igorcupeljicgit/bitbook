import React from "react";
import "./ModalPosts.css";
import {createPost} from "../../services/postService";
import {Auth} from "../../services/AuthService"


class VideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:  Auth.getUserId(),
      videoUrl: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeData = () => {
    const data = {
      type: "video",
      videoUrl: `https://www.youtube.com/embed/${this.state.videoUrl.slice(
        this.state.videoUrl.indexOf("=") + 1
      )}`,
      userId: 2
    };

    createPost(data).then(() => {
      this.props.onUpdateSuccess();
    });
  };

  render() {
    return (
      <div
        className="modal-wrapper main "
        style={{
          transform: this.props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>New Video post</h3>
          <span className="close-modal-btn" onClick={this.props.close}>
            ×
          </span>
        </div>
        <div className="modal-body row text-left">
          <label className="ml-3">Enter video URL</label>
          <div className="col-12">
            <input
              className="videoPost"
              value={this.state.videoUrl}
              name="videoUrl"
              onChange={this.onInputChange}
              type="text"
            />
          </div>

          {this.props.children}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={this.props.close}>
            Close
          </button>
          <button onClick={this.changeData} className="btn-continue">
            Create post
          </button>
        </div>
      </div>
    );
  }
}

export default VideoModal;
