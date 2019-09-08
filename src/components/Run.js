import React, {Component} from "react";
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from "axios";

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runsData: this.props.data
    };
  }

  imageClick(run) {
    axios.post("/api/speedrun/watch-list", run).then(res => {
      this.props.updateFn(res.data);
    });
  }

  render() {
    const gameId = this.props.data.game;
    console.log(gameId)
    let gameName = ''
    axios.get(`https://www.speedrun.com/api/v1/games/${gameId}`).then(res => gameName = res.data.data.names.international)
    console.log(gameName)
    const categoryId = this.props.data.category;
    console.log(categoryId)
    let categoryName = ''
    axios.get(`https://www.speedrun.com/api/v1/categories/${categoryId}`).then(res => categoryName = res.data.data.name)
    console.log(categoryName)
    const videoLink = this.props.data.videos.links[0].uri;

    return (
      <div className="run">
        {gameName}
        {videoLink.includes("twitch") ? (
          <img
            onClick={() => this.imageClick(this.state.runsData)}
            className="twitch-icon"
            width="80"
            height="80"
            src={twitchIco}
            alt="twitch icon"
          />
        ) : (
          <img
            onClick={() => this.imageClick(this.state.runsData)}
            className="twitch-icon"
            width="80"
            height="80"
            src={ytIco}
            alt="youtube icon"
          />
        )}
        {categoryName}
      </div>
    );
  }
}

export default Run;
