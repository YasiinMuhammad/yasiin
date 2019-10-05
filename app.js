require("dotenv").config();

const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require("./routes/api-routes")


const app = express();
const port = process.env.PORT || 8082;

// Express Middleware

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Mongoose Connection

const db = require("./config/connection.js");

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
app.get('/', (req, res) => res.send('Hello World with Express'));

db(process.env.MONGODB_URI || "mongodb://localhost/yasiinPort");

// app.post("/sendemail", (req, res) => {
//   var myData = new emailModel(req.body);
//   myData.save()   
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });
app.use('/api', apiRoutes)
app.listen(port, () => console.log(`Server running on port ${port}`));