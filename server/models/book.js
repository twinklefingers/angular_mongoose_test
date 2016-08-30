/** Book Model for Mongoose **/

// Step 0 - Get our dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment').schema; // this gives us schema for comment instead of model for comments

// Step 1 - Create the Schema
var bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    publishDate: Date,
    comments: [Comment]
});


// Step 2 - Create the Model
var Book = mongoose.model('Book', bookSchema);

// Step 3 - Export the model so we can use it in other parts of our app
module.exports = Book;
