import User from "../entities/User"
import { BASE_API_URL } from "../shared/constants"


const fetchSingleUser = (userId) => {
    const fetchSingle = fetch(`${BASE_API_URL}/users/${userId}/?_embed[]=comments&_embed[]=posts`, {

        method: 'get',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then((element) => {
            console.log(element)
            return new User(element.id, element.avatarUrl, element.name.first, element.name.last, element.about.bio, element.about.job, element.about.countryCode, element.comments, element.posts)

        })

    return fetchSingle
}
export default fetchSingleUser