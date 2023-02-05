import { assert } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.data';

// Describe = seperti Suite in Qase.io
describe('Auth', function() {
    //It = Test Case
    it('Should succesful authentication with valid data', async () => {
        const response = await restfulApi.auth(data.VALID_AUTHENTICATION);          
        
        assert.equal(response.status, 200);
        assert.isString(response.data.token);
    });

    it('Should not succesful authentication with invalid data', async () => {
        const response = await restfulApi.auth(data.INVALID_AUTHENTICATION);          
        
        assert.equal(response.status, 400);
    });

})