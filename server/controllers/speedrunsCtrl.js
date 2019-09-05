//allows me to make server requests
const axios = require("axios");
const recentSpeedrunData = require("../data/recentSpeedrunData");

module.exports = {
  getRecentRuns: (req, res) => {
    axios
      .get(
        "https://www.speedrun.com/api/v1/runs?status=verified&orderby=verify-date&direction=desc"
      )
      .then(result => {
        recentSpeedrunData.recentSpeedruns.push(result.data);
        res.status(200).send(recentSpeedrunData.recentSpeedruns);
      });
  }
};
