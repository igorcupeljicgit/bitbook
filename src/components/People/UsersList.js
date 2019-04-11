import React from "react"
import fetchUsers from '../../services/fetchUsers'
import UserListItem from './UsersListItem'
import User from '../../entities/User'
import { Link } from 'react-router-dom'
import UserNotFound from "./UserNotFound"

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            users2: []
        }
    }
    componentDidMount = () => {
        fetchUsers()
            .then((element) => {
                return element.map((element) => {
                    return new User(element.id, element.avatarUrl, element.name.first, element.name.last, element.about.bio, element.about.job, element.about.countryCode, element.comments, element.posts, element.createdAt)

                })

            })
            .then((users) => {
                this.setState({
                    users: users,
                    users2: users

                })
            })
    }

    filterUsers = (event) => {
        this.setState({
            users2: this.state.users.filter((user) => (user.name.toLowerCase().indexOf(event.target.value) !== -1) || (user.surname.toLowerCase().indexOf(event.target.value) !== -1))
        })
    }



    render() {
        const { users, users2 } = this.state


        return (
            <>
                <div className="mt-4 text-center">
                    <input onChange={this.filterUsers} type="text" className="form-control inputLine col-4" aria-label="Sizing example input" placeholder="Search bitbook users..." />
                    <button type="button" className="btn btn-primary" disabled>Search</button>
                </div>
                <div className='row justify-content-center'>
                    {(users.length && !users2.length) ? <UserNotFound /> :
                    <Link to='/users/:id'><UserListItem key={users.id} users={users2} /></Link>}
                </div>
            </>
        )
    }
}

export default UserList