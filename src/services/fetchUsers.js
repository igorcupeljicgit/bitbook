import { BASE_API_URL } from '../shared/constants'

function fetchUsers() {
    const myFetch = fetch(BASE_API_URL + "/users/?_embed[]=comments&_embed[]=posts", {
        method: 'GET',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data => data)

    return myFetch



}

export default fetchUsers