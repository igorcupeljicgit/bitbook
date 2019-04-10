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
                console.log(element)
                return element.map((element) => {
                    return new User(element.id, element.avatarUrl, element.name.first, element.name.last, element.about.bio, element.about.job, element.about.countryCode, element.comments, element.posts, element.createdAt)
                })

            })
            .then((users) => {
                console.log(users)
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

        return (
            <>
                <div className="my-4 text-center">
                    <input onChange={this.filterUsers} id='inputLine' type="text" className="form-control" aria-label="Sizing example input" placeholder="Search bitbook users..." />
                    <button type="button" className="btn btn-primary" disabled>Search</button>
                </div>
                {this.state.users.length && !this.state.users2.length && <UserNotFound />}
                <Link to='/users/:id'><UserListItem key={this.state.users.id} users={this.state.users2} /></Link>
            </>
        )
    }
}
export default UserList