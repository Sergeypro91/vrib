import React from 'react'
import './video-block.scss'

class VideoBlock extends React.Component {
  render() {
    return (
      <div className="video-block">
        <canvas id="canvas" />
        <div id="square" />
      </div>
    )
  }
}

export default VideoBlock
