import React, {Component} from 'react'
import twitchIco from "../assets/twitchicon.jpg";
import ytIco from "../assets/youtubeicon.png";
import axios from "axios";

class RunSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            runData: this.props.data        }
    }
    
    imageClick(run) {
        axios.post("/api/speedrun/watch-list", run).then(res => {
          this.props.updateFn(res.data);
        });
      }
    
      render() {
        const videoLink = this.state.runData.videos.links[0].uri;
        return (
          <div className="run">
            {this.state.runData.gameName}
            {videoLink.includes("twitch") ? (
              <img
                onClick={() => this.imageClick(this.state.runData)}
                className="twitch-icon"
                width="80"
                height="80"
                src={twitchIco}
                alt="twitch icon"
              />
            ) : (
              <img
                onClick={() => this.imageClick(this.state.runData)}
                className="twitch-icon"
                width="80"
                height="80"
                src={ytIco}
                alt="youtube icon"
              />
            )}
            {this.state.runData.categoryName}
          </div>
        );
      }
}

export default RunSearch