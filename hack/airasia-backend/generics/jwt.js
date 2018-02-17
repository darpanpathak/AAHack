var jwtToken = require('jsonwebtoken');
let secret = "airasia";

module.exports = class jwt {
    constructor() {}

    issue(payload) {
        payload.exp = Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60;
        return jwtToken.sign(payload, secret);
    }

    verify(token, callback) {
        return jwtToken.verify(token, secret, callback);
    }
};