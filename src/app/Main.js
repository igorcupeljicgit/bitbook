import React from "react"
import { Switch, Route } from "react-router-dom"
import Profile from "../components/Profile/Profile";
import People from "../components/People/People";
import Feed from "../components/Feed/Feed";
import UpdatePage from "../components/Profile/UpdatePage"

const Main = () => {

    return (
        <main className='container'>
            <Switch>
                <Route path="/updatepage" component={UpdatePage} />
                <Route path="/profile" component={Profile} />
                <Route path="/users" component={People} />
                <Route path="/" component={Feed} />
            </Switch>
        </main>

    )
}


export default Main