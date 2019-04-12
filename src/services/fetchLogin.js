import { BASE_API_URL } from "../shared/constants";

function fetchLogin(data) {
  return fetch(BASE_API_URL + "/auth/login", {
    method: "POST",
    headers: new Headers({
      "x-api-key": "B1tD3V",
      "Content-Type": "application/json"
    }),

    body: JSON.stringify(data)
  }).then(res => res.json());
}

export default fetchLogin;
