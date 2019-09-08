import React, {Component} from "react";
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from "axios";

class WLRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runData: this.props.data,
      clicked: false
      // watched: false
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
    // this.setState({watched: !this.state.watched})
  }

  render() {
    const game = this.state.runData.gameName;
    const category = this.state.runData.categoryName;
    const watched = this.state.runData.watched;
    const videoLink = this.state.runData.videos.links[0].uri;

    let videoEmbedLink = "";
    if (videoLink.includes("twitch")) {
      videoEmbedLink = videoLink.replace(
        /www.twitch.tv\/videos\//,
        "player.twitch.tv/?autoplay=false&video=v"
      );
    } else if (videoLink.includes("youtu.be")) {
      videoEmbedLink = videoLink.replace(/.be/, "be.com/embed");
    } else if (videoLink.includes("youtube.com")) {
      videoEmbedLink = videoLink.replace(/watch\?v=/, "embed/");
    }

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
                onClick={() => this.watched(this.state.runData.id)}
                className="watched"
              >
                Watched?
              </button>
              <button
                onClick={() => this.remove(this.state.runData.id)}
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
            <iframe
              width="560"
              height="315"
              src={videoEmbedLink}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    );
  }
}

export default WLRun;
