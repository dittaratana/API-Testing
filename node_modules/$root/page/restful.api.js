import BaseAPI from '$root/page/base.api';





const restfulApi = {
    auth: (data) => BaseAPI.post('/auth', data),
    getallid: () => BaseAPI.get('/booking'),
    getbooking: (param) => BaseAPI.get(`/booking/${param}`),
    createbooking: (data) => BaseAPI.post('/booking', data),
    healthcheck: () => BaseAPI.get('/ping'),
    getbookinguser: (param1,param2) => BaseAPI.get(`/booking/?firstname=${param1}&lastname=${param2}`),
    getbookingdate: (param1,param2) => BaseAPI.get(`/booking/?checkin=${param1}&checkout=${param2}`)
}

export default restfulApi;