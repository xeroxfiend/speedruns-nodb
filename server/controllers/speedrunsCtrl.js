//allows me to make server requests
const axios = require("axios");

//access to backend data
const recentSpeedrunData = require("../data/recentSpeedrunData");
const runsUrl = 'https://www.speedrun.com/api/v1/runs?status=verified&orderby=verify-date&direction=desc'

//endpoint controllers
module.exports = {
  getRecentRuns: (req, res) => {
    axios
      .get(
        runsUrl
      )
      .then(result => {
        recentSpeedrunData.recentSpeedruns.push(result.data);
        res.status(200).send(recentSpeedrunData.recentSpeedruns);
      });
  },
  getRecentRunsByRunner: (req, res) => {
    axios
    .get(
      `https://www.speedrun.com/api/v1/users?name=${req.params.name}`
    ).then(userResult => {
        const userId = userResult.data.data[0].id
        return axios.get(`${runsUrl}&user=${userId}`)        
    })
    .then(result => {
      recentSpeedrunData.recentSpeedrunsByRunner.push(result.data);
      res.status(200).send(recentSpeedrunData.recentSpeedrunsByRunner);
    });
  },
  getRecentRunsByGame: (req, res) => {
    axios
    .get(
      `https://www.speedrun.com/api/v1/games?name=${req.query.game}`
    ).then(result => {
        const gameId = result.data.data[0].id
        return axios.get(`${runsUrl}&game=${gameId}`)
    })
    .then(result => {
      recentSpeedrunData.recentSpeedrunsByGame.push(result.data);
      res.status(200).send(recentSpeedrunData.recentSpeedrunsByGame);
    });
  }
};
