//allows me to make server requests
const axios = require("axios");

//access to backend data
const runsUrl =
  "https://www.speedrun.com/api/v1/runs?status=verified&orderby=verify-date&direction=desc";

//endpoint controllers
module.exports = {
  getRecentRuns: (req, res) => {
    axios.get(runsUrl).then(result => {
      const cleanRuns = result.data.data.filter(el => {
        return (
          el &&
          el.videos &&
          el.videos.links &&
          (el.videos.links[0].uri.includes("twitch") ||
            el.videos.links[0].uri.includes("youtu"))
        );
      });
      const finalRuns = cleanRuns.slice(0, 5);
      const runPromises = finalRuns.map(el => {
        const gameId = el.game;
        let gameName = "";
        const categoryId = el.category;
        let categoryName = "";
        return axios
          .get(`https://www.speedrun.com/api/v1/games/${gameId}`)
          .then(res => {
            gameName = res.data.data.names.international;
            return axios.get(
              `https://www.speedrun.com/api/v1/categories/${categoryId}`
            );
          })
          .then(res => {
            categoryName = res.data.data.name;
          })
          .then(() => {
            el.gameName = gameName;
            el.categoryName = categoryName;
            return el;
          });
      });
      Promise.all(runPromises).then(runs => {
        res.status(200).send(runs);
      });
    });
  },
  getRecentRunsByRunner: (req, res) => {
    axios
      .get(`https://www.speedrun.com/api/v1/users?name=${req.params.name}`)
      .then(userResult => {
        const userId = userResult.data.data[0].id;
        return axios.get(`${runsUrl}&user=${userId}`);
      })
      .then(result => {
        const cleanRuns = result.data.data.filter(el => {
          return (
            el &&
            el.videos &&
            el.videos.links &&
            (el.videos.links[0].uri.includes("twitch") ||
              el.videos.links[0].uri.includes("youtu"))
          );
        });
        const finalRuns = cleanRuns.slice(0, 5);
        const runPromises = finalRuns.map(el => {
          const gameId = el.game;
          let gameName = "";
          const categoryId = el.category;
          let categoryName = "";
          return axios
            .get(`https://www.speedrun.com/api/v1/games/${gameId}`)
            .then(res => {
              gameName = res.data.data.names.international;
              return axios.get(
                `https://www.speedrun.com/api/v1/categories/${categoryId}`
              );
            })
            .then(res => {
              categoryName = res.data.data.name;
            })
            .then(() => {
              el.gameName = gameName;
              el.categoryName = categoryName;
              return el;
            });
        });
        Promise.all(runPromises).then(runs => {
          res.status(200).send(runs);
        });
      });
  },
  getRecentRunsByGame: (req, res) => {
    axios
      .get(`https://www.speedrun.com/api/v1/games?name=${req.query.game}`)
      .then(result => {
        const gameId = result.data.data[0].id;
        return axios.get(`${runsUrl}&game=${gameId}`);
      })
      .then(result => {
        const cleanRuns = result.data.data.filter(el => {
          return (
            el &&
            el.videos &&
            el.videos.links &&
            (el.videos.links[0].uri.includes("twitch") ||
              el.videos.links[0].uri.includes("youtu"))
          );
        });
        const finalRuns = cleanRuns.slice(0, 5);
        const runPromises = finalRuns.map(el => {
          const gameId = el.game;
          let gameName = "";
          const categoryId = el.category;
          let categoryName = "";
          return axios
            .get(`https://www.speedrun.com/api/v1/games/${gameId}`)
            .then(res => {
              gameName = res.data.data.names.international;
              return axios.get(
                `https://www.speedrun.com/api/v1/categories/${categoryId}`
              );
            })
            .then(res => {
              categoryName = res.data.data.name;
            })
            .then(() => {
              el.gameName = gameName;
              el.categoryName = categoryName;
              return el;
            });
        });
        Promise.all(runPromises).then(runs => {
          res.status(200).send(runs);
        });
      });
  }
};
