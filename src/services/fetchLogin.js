import { BASE_API_URL } from "../shared/constants";

function fetchLogin(data) {
  return fetch(BASE_API_URL + "/auth/login", {
    method: "POST",
    headers: {
      "x-api-key": "B1tD3V",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },

    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(res=>res);
}

export default fetchLogin;
