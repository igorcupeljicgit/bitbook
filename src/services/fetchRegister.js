import { BASE_API_URL } from "../shared/constants";

function fetchRegister(data) {
  return fetch(BASE_API_URL + "/auth/register", {
    method: "POST",
    headers:{
      "x-api-key": "B1tD3V",
      "Content-Type": "application/json"
    },

    body: JSON.stringify(data)
  }).then(res => res.json()
  ).then(res=>res);
}

export default fetchRegister;
