import React from "react";
import Video from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect  }) => {
  const list = videos.map((video) => {
    return <Video onVideoSelect={onVideoSelect} video={video}/>;
  });

  return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
