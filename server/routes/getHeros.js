var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

/**
 * GET /heros
 *
 * return all heros from database
 */

router.get('/', function(req, res) {
    Hero.find({}, function(err, books) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.send(books);
        }
    });
});

module.exports = router;
