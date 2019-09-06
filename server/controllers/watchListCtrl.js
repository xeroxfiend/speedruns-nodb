const axios = require("axios");
const {watchList} = require("../data/watchListData");

module.exports = {
  addToWatchList: (req, res) => {
    const runObj = req.body;
    runObj.watched = false
    watchList.push(runObj);
    res.status(200).send(watchList);
  },
  getWatchList: (req, res) => {
    res.status(200).send(watchList);
  },
  updateWatchList: (req, res) => {
    const {id} = req.params
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === id) {
        watchList[i].watched = !watchList[i].watched
      }      
    }
    res.status(200).send(watchList)
  },
  deleteFromWatchList: (req, res) => {
    const {id} = req.params
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === id) {
        watchList.splice(watchList[i], 1)
      }      
    }
    res.status(200).send(watchList)
  }
};
