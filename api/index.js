// // require dotenv and process .env content to pass into CONNECTION_STRING
// require('dotenv').config();
// const process = require("process");
// const password = process.env.CLUSTER_PASSWORD;

// // require dependencies: express, mongo, cors, multer
// var Express = require("express");
// var Mongoclient = require("mongodb").MongoClient;
// var cors = require("cors");
// const multer = require("multer");

// // instantiate Express as app, utlize password from .env within CONNETION_STRING. Log result
// var app = Express();
// app.use(cors());
// var CONNECTION_STRING = `mongodb+srv://antoniocruz5612:${password}@cluster0.ynrw87d.mongodb.net/?retryWrites=true&w=majority`;

// // Establish database and connection
// var DATABASENAME = "todoappdb";
// var database;

// app.listen(5038, () => {
//     Mongoclient.connect(CONNECTION_STRING, (error, client) => {
//         database = client.db(DATABASENAME);
//         console.log("Mongo DB Connection Successful");
//     })
// })

// app.get('/api/todoapp/GetNotes', (request, response)=>{
//     database.collection("todoappcollection").find({}).toArray((error, result) => {
//         response.send(result);
//     });
// })


//////////////////// Code Snippet from MongoDB //////////////////////////
require('dotenv').config();


const { MongoClient, ServerApiVersion } = require('mongodb');
const process = require("process");
const password = process.env.CLUSTER_PASSWORD;
const uri = `mongodb+srv://antoniocruz5612:${password}@cluster0.ynrw87d.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
