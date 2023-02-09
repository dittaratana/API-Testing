import { assert } from 'chai';
import restfulApi from '$root/page/restful.api';

// Describe = seperti Suite in Qase.io
describe('GetAllIdBooking', function() {
    //It = Test Case
    it('Should succesful get all id booking', async () => {
        const response = await restfulApi.getallid();          
        assert.equal(response.status, 200);     
        
    });

})