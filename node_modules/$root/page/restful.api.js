import BaseAPI from '$root/page/base.api';
import authApi from './authApi';



const restfulApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    createBooking: (data) => authApi.post('/booking', data),
    getBookingById: (id) => authApi.get(`/booking/${id}`),
    getallid: (data) => authApi.get('/booking', data),
    getBookingByFilter: (param) => authApi.get(`/booking`, {param}),
    healthcheck: () => BaseAPI.get('/ping'),
    
}

export default restfulApi;