import chai, { assert, expect } from 'chai';
import restfulApi from '$root/page/restful.api';
import * as data from '$root/data/user.data';
import * as schema from '$root/schema/list-user.schema'
import jsonSchema from 'chai-json-schema';
import * as booking from '$root/data/user.data'


chai.use(jsonSchema);


var authToken;
var bookingId

// Describe = seperti Suite in Qase.io
describe('Authentication', function() {
    //It = Test Case
    it('Should succesful authentication with valid data', async () => {
        const response = await restfulApi.auth(data.validAuthentication);          
        
        authToken = response.data.token;
        assert.equal(response.status, 200);
        assert.equal(authToken.length, data.validToken.token.length)
        assert.isString(response.data.token, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_AUTH)
    });

    it('Should succesful authentication with invalid data', async () => {
        const response = await restfulApi.auth(data.invalidAuthentication);          
        
        
        assert.equal(response.status, 200);
        assert.equal(response.data.reason, data.invalidResponse.reason)
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH)
    });

    it('Should succesful authentication with invalid data with empty username', async () => {
        const response = await restfulApi.auth(data.InvalidAuthenticationEmptyUsername);          
        
        
        assert.equal(response.status, 200);
        assert.equal(response.data.reason, data.invalidResponse.reason)
        assert.isString(response.data.reason)
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH)
    });

    it('Should succesful authentication with invalid data with empty Password', async () => {
        const response = await restfulApi.auth(data.InvalidAuthenticationEmptyPassword);          
        
        
        assert.equal(response.status, 200);
        assert.equal(response.data.reason, data.invalidResponse.reason)
        assert.isString(response.data.reason)
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH)
    });

    it('Should succesful authentication with invalid data with both empty', async () => {
        const response = await restfulApi.auth(data.InvalidEmpty);          
        
        
        assert.equal(response.status, 200);
        assert.equal(response.data.reason, data.invalidResponse.reason)
        assert.isString(response.data.reason)
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH)
    });
})

describe('Create Booking', function() {
        //It = Test Case
        it('Should succesful create booking', async () => {
            const response = await restfulApi.createBooking(data.CREATE_BOOKING); 
            // console.log(response.data)
            bookingId = response.data.bookingid
            assert.equal(response.status, 200);
            expect(response.data).to.be.jsonSchema(schema.VALID_PARAMS)
            
        });
    
        // it("Create booking using valid type data", async () => {
        //     const response = await RestfulAPI.createBooking(book.VALID_BOOKING_DATA);
        //     // console.log(response.data)
        //     bookingId = response.data.bookingid;
        //     assert.equal(response.status, 200);
        //     expect(response.data).to.be.jsonSchema(schema.VALID_BOOKING_DATA_PARAMS);
        // });
    
})