import React from "react";
import './VideoListItem.css'

const Video = ({ video, onVideoSelect }) => {
  return (
    <div onClick={()=>onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url}></img>
      <div className="content">
      <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default Video;
