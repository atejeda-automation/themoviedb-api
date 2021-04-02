const VALID_RESPONSE = {
    status: 200,
    body: {}
}

const INVALID_API_KEY = {
    status: 401,
    body: {
        status_code: 7,
        status_message: 'Invalid API key: You must be granted a valid key.',
        success: false
    }
}

module.exports = { VALID_RESPONSE, INVALID_API_KEY }
