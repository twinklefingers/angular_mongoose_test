/** Hero Model for Mongoose **/

// Step 0 - Get our dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Step 1 - Create the Schema
var heroSchema = new Schema({
    alias: {
        type: String,
        required: true
    },
    first_name: String,
    last_name: String,
    city: String,
    power_name: String

});


// Step 2 - Create the Model
var Hero = mongoose.model('Hero', heroSchema);

// Step 3 - Export the model so we can use it in other parts of our app
module.exports = Hero;
