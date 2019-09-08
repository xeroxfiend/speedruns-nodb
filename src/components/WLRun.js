import React, {Component} from "react";
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from "axios";

class WLRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runsData: this.props.data
    };
  }

  imageClick(run) {
    //play the run
  }

  remove(id) {
    axios.delete(`/api/speedrun/watch-list/${id}`).then(res => {
      this.props.updateFn(res.data)
    })
  }

  render() {
    const game = this.props.data.game;
    const videoLink = this.props.data.videos.links[0].uri;
    const category = this.props.data.category;

    return (
      <div className="run">
        {game}
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
        {category}
        <div className="buttons">
          <button className="watched">Watched?</button>
          <button
            onClick={() => this.remove(this.state.runsData.id)}
            className="remove"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default WLRun;
