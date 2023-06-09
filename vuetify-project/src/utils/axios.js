import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    defaults: 10000,
})

export default api;
