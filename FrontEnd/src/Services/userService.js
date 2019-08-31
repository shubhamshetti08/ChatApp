import axios from 'axios';
export function userLogin(data){
    return axios.post('/register',data);
}