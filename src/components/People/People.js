import React from "react"
import UserList from "./UsersList";


class People extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <UserList />
            </>
        )
    }
}

export default People