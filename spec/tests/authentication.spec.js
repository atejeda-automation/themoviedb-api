const axios = require('axios')
const expect = require('chai').expect
const ENV = require('../../environment')
const ROUTES = require('../routes')
const { 
    VALID_RESPONSE, 
    INVALID_API_KEY 
} = require('../support/contracts/authentication')

describe('Testcases for /authentication route', () => {

    it(`Request to ${ROUTES.authentication.createRequestToken} 
    generates new token and responds 200`, async () => {
        const request = await axios({
            method: 'get',
            url: ENV.BASE_URL + ROUTES.authentication.createRequestToken,
            params: { api_key: `${ENV.API_KEY}` }
        })
        expect(request.status).eq(VALID_RESPONSE.status)
        expect(JSON.stringify(request.data)).contain('success')
        expect(JSON.stringify(request.data)).contain('expires_at')
        expect(JSON.stringify(request.data)).contain('request_token')
    })

    it(`Request to ${ROUTES.authentication.createRequestToken} 
    generates new error and responds 401`, async () => {
        let request = {}
        try {
            request = await axios({
                method: 'get',
                url: ENV.BASE_URL + ROUTES.authentication.createRequestToken,
                params: { api_key: 'FakeApiKey' }
            })
        } catch (error) {
            expect(error.response.status).eq(INVALID_API_KEY.status)
            expect(error.response.data).deep.equal(INVALID_API_KEY.body)
        }
    })

})