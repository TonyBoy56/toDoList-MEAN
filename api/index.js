// require dotenv and process .env content to pass into CONNECTION_STRING
require('dotenv').config();
const process = require("process");
const password = process.env.CLUSTER_PASSWORD;

// require dependencies: express, mongo, cors, multer
var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");