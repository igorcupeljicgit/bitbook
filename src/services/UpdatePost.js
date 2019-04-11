import { BASE_API_URL } from "../shared/constants";

function createPost(data) {
  return fetch(BASE_API_URL + "/posts", {
    method: "POST",
    headers: new Headers({
      "x-api-key": "B1tD3V",
      "Content-Type": "application/json"
    }),

    body: JSON.stringify(data)
  }).then(res => res.json());
}

export default createPost;
