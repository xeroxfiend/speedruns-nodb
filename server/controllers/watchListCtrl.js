const axios = require("axios");
const {watchList} = require("../data/watchListData");

module.exports = {
  addToWatchList: (req, res) => {
    const runObj = req.body;
    watchList.push(runObj);
    res.status(200).send(watchList);
  },
  getWatchList: (req, res) => {
    res.status(200).send(watchList);
  }
};
