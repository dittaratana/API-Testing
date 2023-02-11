import BaseAPI from '$root/page/base.api';
import authApi from './authApi';



const restfulApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    createBooking: (data) => authApi.post('/booking', data),
    getallid: (data) => authApi.get('/booking', data),
    getBookingById: (id) => authApi.get(`/booking/${id}`),
    getBookingByByFilter: (param) => auth.get(`/booking`, {param}),
    healthcheck: () => BaseAPI.get('/ping'),
    
}

export default restfulApi;