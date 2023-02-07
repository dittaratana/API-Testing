import { assert } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.createBooking';

// Describe = seperti Suite in Qase.io
describe('Createbooking', function() {
    //It = Test Case
    it('Should succesful create booking', async () => {
        const response = await restfulApi.createbooking(data.CREATE_BOOKING);          
        console.log(response)
        assert.equal(response.status, 200);
        assert.isNumber(response.data.bookingid);
        
    });

})
