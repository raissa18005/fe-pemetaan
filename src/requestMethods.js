import axios from "axios";

const BASE_URL = "https://api-pemetaan.herokuapp.com/api";
// const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
