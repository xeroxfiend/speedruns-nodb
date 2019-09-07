import React, {Component} from "react";
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from 'axios'

class Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   runsData: this.state.props.data    
    };
  }

  imageClick() {
      axios.post('/api/speedrun/')
      
  }

  render() {
    console.log(this.props.data);
    const game = this.props.data.game;
    const videoLink = this.props.data.videos.links[0].uri;
    const runner = this.props.data.players[0].id;

    // let ytId = null

    // if (videoLink.includes('youtu')) {
    // for (let i = 0; i < videoLink.length; i++) {
    //     if (videoLink[i] === '=') {
    //         return ytId = videoLink.slice(i + 1, i + 11)
    //     }
    // }}
    // console.log(ytId)
    // const youtubeThumb = <img src="http://img.youtube.com/vi/youtube_id/default.jpg"></img>

    return (
      <div className="run">
        Game Name
        {videoLink.includes("twitch") ? (
          <img onClick={() => this.imageClick()} className = 'twitch-icon' width ='80' height = '80' src={twitchIco} alt="twitch icon" />
        ) : (
          <img onClick={() => this.imageClick()} className = 'twitch-icon' width ='80' height = '80' src={ytIco} alt="youtube icon" />
        )}
        Category
      </div>
    );
  }
}

export default Run;
