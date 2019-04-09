import React from "react"
import fetchData from "../../services/fetchData";
import PostList from "./PostList";

class Feed extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetchData('/posts')
            .then(posts => this.setState({ posts }))
    }

    render() {
        const { posts } = this.state

        console.log(posts);

        return (
            <>
                <PostList posts={posts} />
            </>
        )
    }
}

export default Feed