//allows use of .env files
require("dotenv").config();

//spin up server
const express = require("express");
const app = express();

//sercret server port
const SERVER_PORT = process.env.SERVER_PORT;

//base api URL
const baseUrl = '/api/speedrun'

//top-level middle-ware. Convert JSON into JS objects.
app.use(express.json());

//import endpoint controllers
const speedrunsCtrl = require('./controllers/speedrunsCtrl')

//endpoints
app.get(`${baseUrl}`, speedrunsCtrl.getRecentRuns)

app.get(`${baseUrl}/runner/:name`, speedrunsCtrl.getRecentRunsByRunner)

app.get(`${baseUrl}/game`, speedrunsCtrl.getRecentRunsByGame)







//Ensures server is up and running
app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
