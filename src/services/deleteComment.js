import { BASE_API_URL } from '../shared/constants'

function deleteComment(id) {

    const myFetch = fetch(`${BASE_API_URL}/comments/${id}`, {
        method: 'DELETE',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'

        }),
        commentId: JSON.stringify(id)
    })
        .then(res => res)

    return myFetch
}

export default deleteComment