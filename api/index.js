// require dotenv and process .env content to pass into CONNECTION_STRING
require('dotenv').config();
const process = require("process");
const password = process.env.CLUSTER_PASSWORD;

// require dependencies: express, mongo, cors, multer
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

// instantiate Express as app, utlize password from .env within CONNETION_STRING. Log result
var app = Express();
app.use(cors());
var CONNECTION_STRING = `mongodb+srv://antoniocruz5612:${password}@cluster0.ynrw87d.mongodb.net/?retryWrites=true&w=majority`;
console.log(CONNECTION_STRING);

var DATABASENAME = "todoappdb";
var database;

app.listen(5038, () => {
    
})