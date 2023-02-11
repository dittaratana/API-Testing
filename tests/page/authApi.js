import dotenv from 'dotenv';
import axios from 'axios';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.data'

dotenv.config();

const authApi = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "content-type": "application/json",
        "accept": "*/*",
        "Authorization": "Basic YWRtaW46cGFzc3dvcmQxMjM="
    },
    validateStatus: function (){
        return true;
    }
});

authApi.interceptors.request.use(async function(config){
        const auth = await restfulApi.auth(data.VALID_ID)
        config.headers.Cookie = `token=${auth.data.token}`
        return config;
    },
    function (error) {

        return Promise.reject(error);
    });

export default authApi;