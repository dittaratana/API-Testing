import chai, { assert, expect } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.data';
import { getParams} from '$root/helper/lib-api';
import jsonSchema from 'chai-json-schema';
import * as schema from '$root/schema/list-user.schema';

chai.use(jsonSchema);

// Describe = seperti Suite in Qase.io
describe('getbooking', function() {
    //It = Test Case
    it('Should succesfully get list users', async() => {
        const param = getParams(data.LIST_USER_PARAM['id']);
        const response = await restfulApi.getbooking(param);
        
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_PARAMS);
    });

})