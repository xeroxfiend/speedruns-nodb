import React, {Component} from "react";
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from "axios";

class WLRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runsData: this.props.data,
      clicked: false
    };
  }

  imageClick() {
    this.setState({clicked: !this.state.clicked});
  }

  remove(id) {
    axios.delete(`/api/speedrun/watch-list/${id}`).then(res => {
      this.props.updateFn(res.data);
    });
  }

  watched(id) {
    axios.put(`/api/speedrun/watch-list/${id}`).then(res => {
      this.props.updateFn(res.data);
    });
  }

  render() {
    const game = this.props.data.game;
    const videoLink = this.props.data.videos.links[0].uri;
    const category = this.props.data.category;

    return (
      <div className="player">
        {!this.state.clicked ? (
          <div className="run">
            {game}
            {videoLink.includes("twitch") ? (
              <img
                onClick={() => this.imageClick()}
                className="twitch-icon"
                width="80"
                height="80"
                src={twitchIco}
                alt="twitch icon"
              />
            ) : (
              <img
                onClick={() => this.imageClick()}
                className="twitch-icon"
                width="80"
                height="80"
                src={ytIco}
                alt="youtube icon"
              />
            )}
            {category}
            <div className="buttons">
              <button
                onClick={() => this.watched(this.state.runsData.id)}
                className="watched"
              >
                Watched?
              </button>
              <button
                onClick={() => this.remove(this.state.runsData.id)}
                className="remove"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="video">
            <button onClick={() => this.imageClick()} className="x">
              X
            </button>
            <video
              src={videoLink}
              controls
              height="360px"
              width="640px"
            ></video>
          </div>
        )}
      </div>
    );
  }
}

export default WLRun;
