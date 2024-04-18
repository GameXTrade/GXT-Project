import axios from 'axios';

export default axios.create(
    {
        baseURL: 'http://localhost:8000',
        // baseURL: 'https://gxt-fastapi.onrender.com/',
        withCredentials: true,
    }
)