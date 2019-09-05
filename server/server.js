//allows use of .env files
require("dotenv").config();

//spin up server
const express = require("express");
const app = express();

//sercret server port
const SERVER_PORT = process.env.SERVER_PORT;

//base api URL
const baseURL = '/api/runs'

//top-level middle-wear. Convert JSON into JS objects.
app.use(express.json());


//endpoints




//Ensures server is up and running
app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
