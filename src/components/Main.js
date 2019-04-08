import React from "react"
import { Switch, Route } from "react-router-dom"
import Profile from "./Profile/Profile";
import People from "./People/People";
import Feed from "./Feed/Feed";

const Main = () => {

    return (

        <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/people" component={People} />
            <Route path="/" component={Feed} />
        </Switch>
    )
}
export default Main