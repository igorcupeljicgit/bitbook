import React from "react";
import "./floatingButtonCss.css";
import TextModal from "../modal/Textmodal";
import ImageModal from "../modal/ImageModal";
import VideoModal from "../modal/VideoModal";
import "../modal/ModalPosts.css"



class MainButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowing: false,
            isShowingImage: false,
            isShowingVideo: false

        }
    }
    openModalHandler = () => {
        this.setState({
            isShowing: true,

        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false,

        });
    }
    openModalHandler2 = () => {
        this.setState({
            isShowingImage: true
        });
    }

    closeModalHandler2 = () => {
        this.setState({
            isShowingImage: false
        });
    }
    openModalHandler3 = () => {
        this.setState({
            isShowingVideo: true
        });
    }

    closeModalHandler3 = () => {
        this.setState({
            isShowingVideo: false
        });
    }





    render() {
        return (
            <>
                <TextModal className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    onUpdateSuccess={this.onUpdateSuccess} ></TextModal>
                <ImageModal className="modal"
                    show={this.state.isShowingImage}
                    close={this.closeModalHandler2}
                    onUpdateSuccess={this.onUpdateSuccess} ></ImageModal>
                <VideoModal className="modal"
                    show={this.state.isShowingVideo}
                    close={this.closeModalHandler3}
                    onUpdateSuccess={this.onUpdateSuccess} ></VideoModal>

                <div id="container-floating">

                    <div className="nd4 nds" onClick={this.openModalHandler2} data-placement="left" data-original-title="contract@gmail.com"><img alt="" className="reminder" />
                        <p className="letter"><i className="fas fa-camera-retro"></i></p>
                    </div>
                    <div className="nd3 nds" onClick={this.openModalHandler3} data-placement="left" data-original-title="Reminder"><i className="fas fa-film reminder text-white"></i>

                    </div>
                    <div className="nd1 nds" onClick={this.openModalHandler} data-placement="left" data-original-title="Edoardo@live.it"><img alt="" className="reminder " />
                        <p className="letter">
                            T
                        </p>
                    </div>




                    <div id="floating-button" data-toggle="tooltip" data-placement="left" data-original-title="Create" onclick="newmail()">
                        <p className="plus">+</p>
                        <img className="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" alt="" />
                    </div>

                </div>


            </>
        )
    }

}

export default MainButton