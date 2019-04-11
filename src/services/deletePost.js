import { BASE_API_URL } from '../shared/constants'

function deletePost(postId) {

    const myFetch = fetch(`${BASE_API_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'

        }),
        postId: JSON.stringify(postId)
    })
        .then(res => res)

    return myFetch
}

export default deletePost