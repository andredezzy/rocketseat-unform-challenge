import axios from "axios";

const api = axios.create({
    baseURL: "https://rocketseat-unform-challeng-api.herokuapp.com/api/"
});

export default api;
