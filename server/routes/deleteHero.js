var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

/**
 * DELETE /heros/<id>
 *
 * delete a hero with the given id
 */
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Hero.findByIdAndRemove(id, function(err) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.sendStatus(204);
        }
    });
});

module.exports = router;
