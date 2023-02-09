import chai, { assert, expect } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.data';
import { getParams} from '$root/helper/lib-api';
import jsonSchema from 'chai-json-schema';
import * as schema from '$root/schema/list-user.schema';
import { idBooking } from './create.booking';

chai.use(jsonSchema);

// Describe = seperti Suite in Qase.io
describe('getbooking', function() {
    //It = Test Case
    it('Should succesfully get list users', async() => {
        const param1 = data.userParam['firstname'];
        const param2 = data.userParam['lastname'];
        const response = await restfulApi.getbookinguser(param1,param2);
        console.log(response.data)
        console.log(param1,param2)
        assert.equal(response.status, 200);
        // expect(response.data).to.be.jsonSchema(schema.VALID_PARAMS);
    
    });

    it('Should succesfully get list users by ID', async() => {
        const param = getParams(await idBooking());
        console.log(param)
        console.log("parameter")
        // const param = getParams(data.VALID_ID['id']);
        const response = await restfulApi.getbooking(param);
        console.log(response.data)
        assert.equal(response.status, 200);
    
    })

    it('Should unsuccesfully get list users', async() => {
        const param = getParams(data.INVALID_ID['id']);
        const response = await restfulApi.getbooking(param);
        console.log(response.data)
        assert.equal(response.status, 404);
    
    });

    it('Successfully filter by checkin and Checkout', async() => {
        const param3 = data.userDate['checkin'];
        const param4 = data.userDate['checkout'];
        const response = await restfulApi.getbookingdate(param3,param4)
        console.log(response.data)
        assert.equal(response.status, 200);
        // expect(response.data).to.be.jsonSchema(schema.VALID_PARAMS);
    });

})