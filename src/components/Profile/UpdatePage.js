import React from 'react'

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
    ChangeStateImg(event) {
        this.setState({
            UpdatedStateImg: event.target.value,
        })

    }
    ChangeStateName(event) {
        this.setState({
            UpdatedStateName: event.target.value
        })
    }
    ChangeStateSurname(event) {
        this.setState({
            UpdatedStateSurname: event.target.value
        })
    }
    ChangeStateStatus(event) {
        this.setState({
            UpdatedStateStatus: event.target.value
        })
    }
    UpdateStates() {
        this.ChangeStateImg();
        this.ChangeStateName();
        this.ChangeStateSurname();
        this.ChangeStateStatus();
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
                            <input onChange={this.ChangeStateImg} className="inputimage" type="text" placeholder="Enter URL of the new Profile Image"></input>
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
                            <input value={this.state.UpdatedStateSurname} onChange={this.ChangeStateSurname} className="inputSurname" type="text" placeholder="Enter Profile Surname"></input>
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
                            <button type="submit">Update Info</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </form>

            </div>


        )
    }
}

export default UpdatePage