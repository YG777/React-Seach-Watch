import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtubeData from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null, title:"Silvester Tube" };

  componentDidMount() {
    this.onSearchTermSubmit("silvester cat");
  }

  onSearchTermSubmit = async (searchTerm) => {
    const videos = await youtubeData(searchTerm);
    this.setState({
      videos: videos,
      selectedVideo: videos[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
    
      <div className="ui container">
        <div className="ui huge header green">{this.state.title}</div>
        <SearchBar onSearchSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
