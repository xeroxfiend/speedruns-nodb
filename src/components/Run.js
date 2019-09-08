import React, {Component} from "react";
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from 'axios'

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runsData: this.props.data,
    };
  }

  imageClick(run) {
      axios.post('/api/speedrun/watch-list', run).then(res => {
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
          <img onClick={() => this.imageClick(this.props.data)} className = 'twitch-icon' width ='80' height = '80' src={twitchIco} alt="twitch icon" />
        ) : (
          <img onClick={() => this.imageClick(this.props.data)} className = 'twitch-icon' width ='80' height = '80' src={ytIco} alt="youtube icon" />
        )}
        {category}
      </div>
    );
  }
}

export default Run;
