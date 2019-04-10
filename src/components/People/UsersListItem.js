import React from 'react'
import { Link } from 'react-router-dom'

const UserListItem = (props) => {
    const newUsers = props.users.map((user) => {
        return (
            <Link key={user.id} to={`/users/${user.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div id="postCard" className="card mb-3" style={{ maxwidth: '540px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-2 p-3">
                            <img src={user.img} className="card-img rounded-circle imagePeople" alt="..." />
                        </div>
                        <div className="col-md-10">
                            <div className="card-body">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                <p className="card-text">{user.about} </p>
                                <p className="card-text"><small className="text-muted">{user.created}</small></p>
                            </div>
                        </div>
                    </div>
                </div >
            </Link>
        )
    })
    return newUsers
}
export default UserListItem