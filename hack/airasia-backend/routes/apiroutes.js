const express = require('express');
const apirouter = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../data/samplebooking.json');

var router = function() {

    apirouter.route('/')
        .get(function(req, res) {
            jsonfile.readFile(file, function(err, obj) {
                res.send(obj);
            });
        });

    apirouter.route('/flightdetails')
        .get(function(req, res) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) throw err;

                obj = JSON.parse(data);

                console.log(JSON.stringify(obj));

                extraObj = {};
                if (Object.keys(obj.JourneyServices.JourneyService[0].Segments.Segment).length > 1) {
                    extraObj.isHalt = true;
                    extraObj.station = obj.JourneyServices.JourneyService[0].Segments.Segment[0].ArrivalStation;
                    extraObj.haltFrom = obj.JourneyServices.JourneyService[0].Segments.Segment[0].ArrivalTime;
                    extraObj.haltTo = obj.JourneyServices.JourneyService[0].Segments.Segment[1].DepartureTime;
                    extraObj.haltTime = Math.floor((Math.abs(new Date(extraObj.haltTo) - new Date(extraObj.haltFrom)) / 1000) / 60);

                    if (extraObj.haltTime > 180)
                        extraObj.canGoOut = true;
                }

                res.send({ flightDetail: obj, other: extraObj });

            });
        });


    return apirouter;
};

module.exports = router;