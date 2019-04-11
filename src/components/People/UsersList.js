import React from "react"
import fetchUsers from '../../services/fetchUsers'
import UserListItem from './UsersListItem'
import User from '../../entities/User'
import { Link } from 'react-router-dom'
import UserNotFound from "./UserNotFound"

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            searchInput: ""
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
                })
            })
    }

    filterUsers = (event) => {
        this.setState({
            searchInput: event.target.value,
        })
    }



    render() {
        const { users, searchInput } = this.state

        const filteredUsers = users.filter((user) => (user.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1));


        return (
            <>
                <div className="mt-4 text-center">
                    <input onChange={this.filterUsers}
                        type="text"
                        name="search"
                        value={searchInput}
                        className="form-control inputLine col-4"
                        aria-label="Sizing example input"
                        placeholder="Search bitbook users..." />
                    <button type="button" className="btn btn-primary" disabled>Search</button>
                </div>
                <div className='row justify-content-center'>
                    {(!filteredUsers.length) ? <UserNotFound /> :
                        <UserListItem key={users.id} users={filteredUsers} />}
                </div>
            </>
        )
    }
}

export default UsersList