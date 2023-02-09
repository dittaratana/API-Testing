import { assert } from 'chai';
import restfulApi from '$root/page/restful.api';

// Describe = seperti Suite in Qase.io
describe('Healthcheck', function() {
    //It = Test Case
    it('Should succesfull Help Check', async () => {
        const response = await restfulApi.healthcheck();          
        assert.equal(response.status, 201);
    });

})