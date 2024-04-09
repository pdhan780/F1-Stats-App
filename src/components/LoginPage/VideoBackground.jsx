//Setup the video to be played within login page

import React from 'react';

const VideoBackground = () => {
  return (
    <video autoPlay="autoplay" loop="loop" muted className="video-background" style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1"
    }}>
      <source src='src/assets/test.mp4' type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;