2016.09.01

This was a 3 hour test of knowledge of Angular.JS, Angular Routes, MongoDB and Mongoose - a full-fledged CRUD application

Still working on getting drop down into database
```
Sections, Routes, and Controllers

Your app should have two sections, one for creating heroes and one for displaying
 and removing heroes. Your app should have three server side routes: one for
  creating heroes, one for retrieving heroes, and one for deleting heroes. Your
   app should have two controllers, one for each section.

Hero Creation

This section will have a form to fill out and create new heroes. Each hero will
 have the following information on their record:

- alias (this is their superhero name)
- first_name
- last_name
- city
- power_name

Store these in a Collection called Heroes with Mongo.
db.createCollection(‘Heroes’);
// I misspelled heroes the whole way through, spelling it "heros" - whoops

Determining the Super Power

The hero creation section should utilize a list of known super powers to populate
 a section of the page where a user can make a choice for the power_name field.
  This could be a <select> element, a series of radio buttons or some other way
   of accepting the user's input.

Allow the user to choose from the following super powers:

- Invisibility
- Flight
- Super Speed
- Heat Vision
- Super Strength
- Accelerated Healing
- Power Blast
- Animal Affinity

Hero Listing & Removal

This section should show a list of heroes, displaying all the information from
 the entry captured in the hero creation section. Each listing should have a
  button to delete the hero from the database.

Node Server

Your app will need a Node/Express server that can serve static files.

Database

If you follow the naming guidelines above for your Collection, there is no need
 to submit any information about your database.
```

![alt tag](/server/public/imgs/screenshot.png)
