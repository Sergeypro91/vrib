import React from 'react'
import VideoBlock from '../Video-block/Video-block'
import TableBlock from '../Table-block/Table-block'
import JSMpeg from '@cycjimmy/jsmpeg-player'
import bell from './bell.mp3'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      call: true,
    }
  }

  connect() {
    const square = document.getElementById('square')
    const audio = new Audio(bell)

    function play() {
      audio.play()
      if (square.style.backgroundColor === 'red') {
        square.style.backgroundColor = '#e3e3e3'
      } else {
        square.style.backgroundColor = 'red'
      }
    }
    const ws = new WebSocket('ws://127.0.0.1:8888')
    ws.onopen = () => {
      console.log('WebSocket Client Connected')
    }
    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data)
      this.addMessage(message)
      const inter = setInterval(() => {
        play()
      }, 500)
      setTimeout(() => {
        clearInterval(inter)
      }, 5000)
    }
    ws.onclose = () => {
      console.log('WebSocket Client Disconnect')
      // setTimeout(function () {
      //   this.connect()
      // }, 5000)
    }
    ws.onerror = (err) => {
      console.error('Socket encountered error: ', err.message, 'Closing socket')
      ws.close()
    }
  }

  video() {
    new JSMpeg.Player('ws://localhost:9999', {
      canvas: document.getElementById('canvas'),
    })
  }

  addMessage = (message) => {
    this.setState((state) => ({ messages: [message, ...state.messages] }))
  }

  componentDidMount() {
    this.connect()
    this.video()
  }

  render() {
    return (
      <div className="app container">
        <VideoBlock />
        <TableBlock someData={this.state.messages} />
      </div>
    )
  }
}

export default App
