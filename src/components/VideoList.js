import React from "react";
import Video from "./Video";

const VideoList = ({ videos }) => {
  const list = videos.map((video) => {
    return <Video video={video}/>;
  });

  return <div>{list}</div>;
};

export default VideoList;
