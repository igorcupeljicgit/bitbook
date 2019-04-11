import React from 'react';
// import postUpdate from "../../services/postUpdate"
import './ModalPosts.css';

class ImageModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 2,
            imagepost: ""
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeData = () => {
        const data = {
            avatarUrl: this.state.avatarInput,
            name: {
                first: this.state.nameInput,
                last: this.state.surnameInput,
            },
            about: {
                bio: this.state.aboutInput,
                job: this.state.aboutJob,
                countryCode: this.state.aboutCompany,
            }
        }

        // postUpdate(data)
        //     .then(() => {
        //         this.props.onUpdateSuccess()
        //     })
    }


    render() {
        return (
            <div className="modal-wrapper main "
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>New Image post</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body row text-left">
                    <label className="ml-3">Enter Img URL</label>
                    <div className="col-12">


                        <input className="imagePost" value={this.state.imagepost} name="imagepost" onChange={this.onInputChange} type="text" placeholder="URL address"></input>
                    </div>



                    {this.props.children}

                </div>


                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>Close</button>
                    <button onClick={this.changeData} className="btn-continue">Create post</button>
                </div>
            </div >


        )

    }


}




export default ImageModal;