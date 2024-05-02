import axios from 'axios';
import store from '@/store';
const axiosClient = axios.create({
    baseURL: 'https://guiwebadmin.demoguisrilanka.com/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
});

axiosClient.interceptors.request.use(config => {
    const token = store.state.token;
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
        console.log('Authorization header set with token:', token);
    } else {
        console.warn('No token found in Vuex store.');
    }
    return config; 
});

export default axiosClient;