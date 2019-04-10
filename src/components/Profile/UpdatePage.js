import React from 'react'
import { Link } from 'react-router-dom'

class UpdatePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            UpdatedStateImg: '',
            UpdatedStateName: '',
            UpdatedStateSurname: '',
            UpdatedStateStatus: '',
        }

    }





    ChangeStateImg = (event) => {
        this.setState({
            UpdatedStateImg: event.target.value,
        })


    }
    ChangeStateName = (event) => {
        this.setState({
            UpdatedStateName: event.target.value
        })

    }
    ChangeStateSurname = (event) => {
        this.setState({
            UpdatedStateSurname: event.target.value
        })

    }
    ChangeStateStatus = (event) => {
        this.setState({
            UpdatedStateStatus: event.target.value
        })

    }




    render() {
        return (
            <div className="container">
                <form onSubmit={this.UpdateStates}>

                    <div className='row'>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <h2>Enter Your Information</h2>
                        </div>
                        <div className="col-3"></div>
                    </div>

                    <div className='row'>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input value={this.state.UpdatedStateImg} onChange={this.ChangeStateImg} className="inputimage" type="file" placeholder="Enter URL of the new Profile Image"></input>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className='row'>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input value={this.state.UpdatedStateName} onChange={this.ChangeStateName} className="inputname" type="text" placeholder="Enter Profile Name"></input>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className='row'>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input value={this.state.UpdatedStateSurname} onChange={this.ChangeStateSurname} className="inputSurname" type="text" placeholder="Enter Profile Surname" ></input>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className='row'>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input value={this.state.UpdatedStateStatus} onChange={this.ChangeStateStatus} className="inputInfo" type="text" placeholder="Enter some information about you"></input>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className='row'>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <Link to="/profile"><button type="reset">Close</button></Link>
                            <button type="submit">Update Info</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </form>

            </div >


        )
    }
}

export default UpdatePage