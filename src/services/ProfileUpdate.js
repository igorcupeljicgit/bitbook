import { BASE_API_URL } from '../shared/constants'
import jwt_decode from "jwt-decode"

function profileUpdate(data) {
    const decode=jwt_decode(localStorage.getItem("token"))
    console.log(decode.id)
    const myFetch = fetch(BASE_API_URL + `/users/${decode.id}`, {
        method: 'PATCH',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`

        }),
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)

    return myFetch



}

export default profileUpdate