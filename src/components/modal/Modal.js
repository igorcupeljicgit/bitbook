import React from 'react';
import profileUpdate from "../../services/postUpdate"

import './Modal.css';
class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 2,
            avatarInput: "",
            nameInput: "",
            surnameInput: "",
            aboutInput: "",
            aboutJob: "",
            aboutCompany: ""
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

        profileUpdate(data)
            .then(() => {
                this.props.onUpdateSuccess()
            })
    }


    render() {
        return (
            <div className="modal-wrapper main "
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h3>Update profile</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body row text-left">
                    <div className="col-6">
                        <label >Change picture</label>

                        <input value={this.state.avatarUrl} name="avatarInput" onChange={this.onInputChange} type="text"></input>
                    </div>
                    <div className="col-6 text-left">
                        <label>First name</label>
                        <input value={this.state.nameInput} name="nameInput" onChange={this.onInputChange} type="text" className="col-12"></input>
                        <label >Last name</label>
                        <input value={this.state.surnameInput} name="surnameInput" onChange={this.onInputChange} type="text" className="col-12"></input>
                    </div>

                    <label className="ml-3">About user</label>
                    <input value={this.state.aboutInput} name="aboutInput" onChange={this.onInputChange} type="text" className="col-11 ml-3"></input>
                    <label className="ml-3">Profession</label>
                    <input value={this.state.aboutJob} name="aboutJob" onChange={this.onInputChange} type="text" className="col-11 ml-3"></input>
                    <label className="ml-3">Country code</label>
                    <input value={this.state.aboutCompany} name="aboutCompany" onChange={this.onInputChange} type="text" className="col-11 ml-3"></input>
                    <p>
                        {this.props.children}
                    </p>
                </div>


                <div className="modal-footer">
                    <button className="btn-cancel" onClick={this.props.close}>Close</button>
                    <button onClick={this.changeData} className="btn-continue">Update profile</button>
                </div>
            </div >


        )

    }


}




export default Modal;