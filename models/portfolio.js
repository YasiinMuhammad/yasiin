const mongoose = require('mongoose');
const Schema = mongoose.Schema


const PorfolioSchema= new Schema({
     name:{
        type: String,
        required: true
     },
     discription:{
        type: String,
        required: true
     },
     techology:{
        type: String,
        required: true
     },
     image:{
        type: Buffer,
        required: true
     },
     

 });
  module.exports = Item = mongoose.model('item', PorfolioSchema);
    
    // discription: "This exercise is a full stack development using the MVC framework. It uses a front-end of HTML/CSS and handlebars. The back-end uses node-js, express, and handlebars. Data is kept in a MYSQL database.",
    //         techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars",
    //         link: <a href="https://boiling-castle-88722.herokuapp.com">Check out my project</a>,



    //     },
    //     {
    //         discription: "Sure Shelter is a web-based application allowing users to search for Homeless Shelters in their area, as well as allowing companies to sign up to donate goods or services.",
    //         techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars"
    //     },

    //     {
    //         discription: "In need of a friend? Oh boy, time to get on our app, and find that special someone. After filling out a quick survey, our friend-matching algorithm will pair you with an individual in our network.",
    //         techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars"
    //     },

    //     {
    //         discription: "The responsive application allows users to research recipes of their choice and displays generated recipes on the main page",
    //         techUsed: "HTML, CSS, Node.js, Express.js, Handlebars, MYSQL, Express, body-parser, handlebars"
    //     },