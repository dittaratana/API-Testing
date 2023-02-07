import chai, { assert, expect } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/getUser';
import { getParams} from '$root/helper/lib-api';
import jsonSchema from 'chai-json-schema';
import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema);

// Describe = seperti Suite in Qase.io
describe('getbooking', function() {
    //It = Test Case
    it('Should succesfully get ID list users', async() => {
        const param1 = getParams(data.userParam['firstname']);
        const param2 = getParams(data.userParam['lastname'])
        const response = await restfulApi.getbookinguser(param1,param2);
        console.log(response.data)
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_PARAMS);
    
    });

    // it('Should unsuccesfully get list users', async() => {
    //     const param = getParams(data.INVALID_ID['id']);
    //     const response = await restfulApi.getbooking(param);
    //     console.log(response.data)
    //     assert.equal(response.status, 404);
    //     expect(response.data).to.be.jsonSchema(schema.INVALID_ID);
    // })

})