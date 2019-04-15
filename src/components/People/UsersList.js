import React from "react"
import {fetchUsers} from '../../services/userService'
import UserListItem from './UsersListItem'
import User from '../../entities/User'
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
                console.log(element)
                return element.map(({id,avatarUrl="[https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg]",name="['']",about="[da]",comments="['']",posts="['']",createdAt="['']"}) => {
                    return new User(id,avatarUrl,name.first,name.last,about.bio,about.job,about.countryCode,comments,posts,createdAt)
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