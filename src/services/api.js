import axios from 'axios';

const api = axios.create({
    baseURL: 'https://git.heroku.com/quiet-coast-34395.git',
})
export default api;