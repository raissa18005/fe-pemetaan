import axios from "axios";

const BASE_URL = "https://api-pemetaan.herokuapp.com/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
