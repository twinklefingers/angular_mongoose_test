var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');


/**
 * POST /heros
 *
 * add a new hero to the database
 */
router.post('/', function(req, res) {
    console.log("POST", req.body);
    var hero = Hero(req.body);
    hero.save(function(err) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.sendStatus(201); // means created
        }
    });
});

module.exports = router;
