import axios from 'axios';

const api = axios.create({
    baseURL:'https://cherry-custard-19541.herokuapp.com/'
})
export default api;