import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://nunyaconnect.herokuapp.com/api/",
});