import { BASE_API_URL } from '../shared/constants'

function fetchData(str) {
    const myFetch = fetch(BASE_API_URL + str, {
        method: 'get',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(data => data)

    return myFetch
}

export default fetchData