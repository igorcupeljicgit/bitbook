import { BASE_API_URL } from '../shared/constants'

function postComm(postId, data) {

    const body = {
        userId: 2, // This is only for dev env
        postId: postId,
        body: data
    }

    const myFetch = fetch(BASE_API_URL + '/comments', {
        method: 'POST',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'

        }),
        body: JSON.stringify(body)
    })
        .then(res => res)

    return myFetch
}

export default postComm