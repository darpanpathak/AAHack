var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3030;
var cors = require('cors');
let authentication = require('./authentication.js');
const path = require('path');
app.use(express.static('dist'));

app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api/*', (req, res, next) => {

    authentication.prototype.isAuthenticated(req).then(result => {
        next();
    }).catch(err => {
        res.send("unauthorized access");
    });

});

var apiRouter = require('./routes/apiroutes')();
app.use('/api', apiRouter);

var accountRouter = require('./routes/accountroutes')();
app.use('/account', accountRouter);

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

startapp = () => {
    app.listen(port, function(err) {
        if (err) console.log(err);
        console.log('running server on port ' + port);
    });
};

startapp();