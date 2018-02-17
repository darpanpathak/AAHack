const express = require('express');
const accountrouter = express.Router();
const bodyParser = require('body-parser');
const jwt = require('../generics/jwt');

var router = function() {

    accountrouter.route('/login')
        .post((req, res) => {
            let token = jwt.prototype.issue({ username: req.body.username });
            res.send({ msg: "success", token: token });
        });

    return accountrouter;
};

module.exports = router;