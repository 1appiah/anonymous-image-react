import axios from "axios";



const baseUrl = "https://anonymous-image.onrender.com/"

const axiosInstance = axios.create({
    baseURL:baseUrl,
    
    headers:{
        Authorization:localStorage.getItem('access_token')
        ? 'JWT ' + localStorage.getItem('access_token')
        : null,
        'Content-Type': 'application/json',
        Accept:'application/json',
    },
});

export default axiosInstance