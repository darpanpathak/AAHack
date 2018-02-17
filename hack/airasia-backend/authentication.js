const jwt = require('./generics/jwt');
module.exports = class authenticate {
    constructor() {}

    isAuthenticated(req) {
        return new Promise((resolve, reject) => {

            //check header or url parameters or post parameters for token
            try {
                var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;

                // decode token
                if (token) {

                    // verifies secret and checks exp
                    jwt.prototype.verify(token, function(err, decoded) {
                        if (err) {
                            reject(false);
                        } else {
                            // if everything is good, save to request for use in other routes
                            resolve(true);
                        }
                    });

                } else {
                    reject(false);
                }
            } catch (err) {
                reject(false);
            }
        });
    }
};