import { BASE_API_URL } from '../shared/constants'

function profileUpdate(data) {
    const myFetch = fetch(BASE_API_URL + `/users/2`, {
        method: 'PATCH',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'

        }),
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)

    return myFetch



}

export default profileUpdate