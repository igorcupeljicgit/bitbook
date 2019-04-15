import React from "react";
import "./floatingButtonCss.css";
import TextModal from "../modal/Textmodal";
import ImageModal from "../modal/ImageModal";
import VideoModal from "../modal/VideoModal";
import "../modal/ModalPosts.css";

class MainButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      type: ""
    };
  }

  openModal = type => {
    this.setState({
      isOpen: true,
      type: type
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
      type: ""
    });
  };

  onUpdateSuccess = () => {
    this.closeModal();
    this.props.afterCreation();
  };

  render() {
    const { type, isOpen } = this.state;

    return (
      <>
        <TextModal
          className="modal"
          show={isOpen && type === "text"}
          close={this.closeModal}
          onUpdateSuccess={this.onUpdateSuccess}
        />
        <ImageModal
          className="modal"
          show={isOpen && type === "image"}
          close={this.closeModal}
          onUpdateSuccess={this.onUpdateSuccess}
        />
        <VideoModal
          className="modal"
          show={isOpen && type === "video"}
          close={this.closeModal}
          onUpdateSuccess={this.onUpdateSuccess}
        />

        <div id="container-floating" style={{ zIndex: '9999' }}>
          <div
            className="nd4 nds bg-warning "
            onClick={() => this.openModal("image")}
            data-placement="left"
            data-original-title="contract@gmail.com"
          >
            <img alt="" className="reminder" />
            <p className="letter">
              <i className="fas fa-camera-retro" />
            </p>
          </div>

          <div
            className="nd3 nds bg-danger  videoButton"
            onClick={() => this.openModal("video")}
            data-placement="left"
            data-original-title="Reminder"
          >
            <i className="fas fa-film reminder text-white" />
          </div>

          <div
            className="nd1 nds bg-primary "
            onClick={() => this.openModal("text")}
            data-placement="left"
            data-original-title="Edoardo@live.it"
          >
            <img alt="" className="reminder bg-primary" />
            <p className="letter">T</p>
          </div>

          <div
            id="floating-button"
            data-toggle="tooltip"
            data-placement="left"
            data-original-title="Create"
          >
            <p className="plus">+</p>
            <img
              className="edit"
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export { MainButton };
