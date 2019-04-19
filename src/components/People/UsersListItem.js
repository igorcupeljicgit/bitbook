import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar';

const UserListItem = (props) => {
    const newUsers = props.users.map((user) => {
        return (
            <Link key={user.id} to={`/users/${user.id}`} style={{ textDecoration: 'none', color: 'black' }} className="col-md-7 col-sm-11">
                <div className="card customCard shadow">
                    <div className="row no-gutters">
                        <div className="col-3 p-3">
                            <Avatar src={user.img} size="100px" shape="round" />
                        </div>
                        <div className="card-body col-9">
                            <h5 className="card-title">{user.name} {user.surname}</h5>
                            <p className="card-text">{user.about} </p>
                            <p className="card-text"><small className="text-muted">{user.created}</small></p>
                        </div>
                    </div>
                </div >
            </Link>
        )
    })

    return newUsers
}
export default UserListItem