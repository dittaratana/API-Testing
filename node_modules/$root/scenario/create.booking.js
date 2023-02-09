import { assert } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.data';

let id_data

// Describe = seperti Suite in Qase.io
describe('Createbooking', function() {
    //It = Test Case
    it('Should succesful create booking', async () => {
        const response = await restfulApi.createbooking(data.CREATE_BOOKING);          
        id_data = response.data.bookingid
        assert.equal(response.status, 200);
        assert.isNumber(response.data.bookingid);
        
    });



})

export const idBooking = async () => {
    const value = await id_data 
    return value
}