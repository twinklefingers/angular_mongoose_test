var express = require('express');
var router = express.Router();
var Book = require('../models/book');

/**
 * GET /books
 *
 * return all books from database
 */

router.get('/', function(req, res) {
    Book.find({}, function(err, books) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.send(books);
        }
    });
});

/**
 * POST /books
 *
 * add a new book to the database
 */
router.post('/', function(req, res) {
    console.log("POST", req.body);
    var book = Book(req.body);
    book.save(function(err) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.sendStatus(201); // means created
        }
    });
});
/**
 * PUT /books/<id>
 *
 * update a book with the given id
 */
router.put('/:id', function(req, res) {
    var book = req.body;
    var id = req.params.id;
    Book.findByIdAndUpdate(id, book, function(err, book) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.status(204).send(book);
        }
    });
});
/**
 * DELETE /books/<id>
 *
 * delete a book with the given id
 */
router.delete('/:id', function(req, res) {
    var id = req.params.id;
    Book.findByIdAndRemove(id, function(err) {
        if (err) {
            res.sendStatus(500);
            return;
        } else {
            res.sendStatus(204);
        }
    });
});

// Comments Route
router.post('/:id/comments', function(req, res) {
    var id = req.params.id // capture the id of req.body
    var comment = req.body;
    console.log("new comment data: ", comment);

    Book.findById(id, function(err, book) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        book.comments.push(comment);
        book.save(function(err) {
            if (err) {
                console.log("book.save err: ", err);
                res.sendStatus(500);
                return;
            } else {
                res.sendStatus(204);
            }
        });
    });
});


module.exports = router;
