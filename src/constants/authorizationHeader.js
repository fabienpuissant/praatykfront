import axios from 'axios'

export default function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}