import React from 'react'
import './video-block.scss'

class VideoBlock extends React.Component {
  render() {
    return (
      <div className="video-block">
        <canvas id="canvas" />
        <button id="square1" onClick={this.props.whoIs} />
        <button id="square2" onClick={this.props.openDoor} />
        <button id="square3" onClick={this.props.entryDenied} />
      </div>
    )
  }
}

export default VideoBlock
