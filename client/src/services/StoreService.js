// To override the default base URL for a specific request, you can set the baseURL property of the request config object.

// Here’s an example:

// axios.get('/users', {
//   baseURL: 'https://api.example.com'
// })
// In this example, we’re making a GET request to /users, but we’re overriding the default base URL (https://api.example.com) with a new one (https://api.example.com).

// I hope that helps! Let me know if you have any other questions.

import axios from "axios";

export default {
  getAllGames() {
    return axios.get("/games?key=4e5c574bcfe44161bddae880c383dfc3", {
      baseURL: "https://api.rawg.io/api",
    });
  },
};
