import User from "../entities/User"
import { BASE_API_URL } from "../shared/constants"


const fetchSingleUser = (userId) => {
    const fetchSingle = fetch(`${BASE_API_URL}/users/${userId}/?_embed[]=comments&_embed[]=posts`, {

        method: 'GET',
        headers: new Headers({
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        })
    })
        .then(res => res.json())
        .then(({id, avatarUrl="[https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg]",name="['']",about="[]",comments="[]",posts="[]",createdAt="['']"}) => {
          
            return new User(id,avatarUrl,name.first,name.last,about.bio, about.countryCode,about.job,comments,posts,createdAt)

        })

    return fetchSingle
}
export default fetchSingleUser