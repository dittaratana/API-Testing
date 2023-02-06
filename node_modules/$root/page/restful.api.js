import BaseAPI from '$root/page/base.api';
import { CREATE_BOOKING } from '../data/user.data';

const restfulApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    getallid: () => BaseAPI.get('/booking'),
    getbooking: (param) => BaseAPI.get(`/booking/${param}`),
    createbooking: (data) => BaseAPI.post('/booking', data),
    healthcheck: () => BaseAPI.get('/ping'),
    
}

export default restfulApi;