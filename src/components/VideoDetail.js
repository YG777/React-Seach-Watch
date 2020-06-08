import React from "react";

const VideoDetail = ({ video }) => {
  return !video ? (
    <div>Loading...</div>
  ) : (
    <div className="ui segment">
      <div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
