import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  onSearchTermSubmit = async (searchTerm) => {
    const KEY = "AIzaSyCXlPOInn72RmeGKVLH1SedSOSV73I_wNE";

    const res = await youtube.get("/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: `${KEY}`,
      },
    });
    this.setState({ videos: res.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        {this.state.videos.length}
        <SearchBar onSearchSubmit={this.onSearchTermSubmit} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
