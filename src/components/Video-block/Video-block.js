import React from 'react'
import './video-block.scss'

class VideoBlock extends React.Component {
  render() {
    return (
      <div className="video-block col-md-4 mb-4">
        <div className="video-canvas col-md-12 mb-12">
          <canvas id="canvas" className="video-canvas__child" />
        </div>
        <div className="video-buttons col-md-12 mb-12">
          <button
            id="whoIs"
            className="video-buttons__child"
            onClick={this.props.whoIs}
          />
          <button
            id="openDoor"
            className="video-buttons__child"
            onClick={this.props.openDoor}
          />
          <button
            id="entryDenied"
            className="video-buttons__child"
            onClick={this.props.entryDenied}
          />
        </div>
      </div>
    )
  }
}

export default VideoBlock
