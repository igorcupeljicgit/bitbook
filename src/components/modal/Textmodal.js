import React from "react";
import createPost from "../../services/UpdatePost";
import "./ModalPosts.css";

class TextModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      textpost: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  changeData = () => {
    const data = {
      type: "text",
      text: this.state.textpost
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
          <h3>New text post</h3>
          <span className="close-modal-btn" onClick={this.props.close}>
            ×
          </span>
        </div>
        <div className="modal-body row text-left">
          <label className="ml-3">Enter your text</label>
          <div className="col-12">
            <textarea
              value={this.state.textpost}
              name="textpost"
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

export default TextModal;
