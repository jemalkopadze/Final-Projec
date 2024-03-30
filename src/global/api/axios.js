import axios from 'axios'
import { apiURL } from 'global/config';
import { postURL } from 'global/config';
import {usrURL} from 'global/config';
import { getData } from 'global/storage';

const checkHeader = () => {

    const checkUser = () => {
        const user = getData('User');
        if (user && user.token && user.date > new Date().getTime()) {
            return `Bearer ${user.token}`
        }
        return null;
    }
    return axios.defaults.headers.common['Authorization'] = checkUser();
}
  
export const _getRequest = async (url, params = {}) => {
    checkHeader();
    const response = await axios.get(apiURL + url, params);
    return response.data
}

export const _getRequestUsr = async (url, params = {}) => {
    checkHeader();
    const response = await axios.get(usrURL + url, params);
    return response.data
}

export const _postRequest = async (url, params = {}) => {
    checkHeader();
    const response = await axios.post(postURL + url, params);
    return response.data
}
