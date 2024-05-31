import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL || 'https://raw.githubusercontent.com';

export default axios;