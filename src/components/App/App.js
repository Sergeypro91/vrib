import React from 'react'
import JSMpeg from '@cycjimmy/jsmpeg-player'
import VideoBlock from '../Video-block/Video-block'
import TableBlock from '../Table-block/Table-block'
import bell from './bell.mp3'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.connect()
    this.video()
  }

  addMessage = (message) => {
    this.setState((state) => ({ messages: [message, ...state.messages] }))
  }

  connect = () => {
    const square = document.getElementById('whoIs')
    const audio = new Audio(bell)

    function play() {
      audio.play()
      if (square.style.backgroundColor === 'red') {
        square.style.backgroundColor = '#e3e3e3'
      } else {
        square.style.backgroundColor = 'red'
      }
    }

    function reconnect() {
      console.log('Try to reconnect')
      setWebSocket()
    }

    const setWebSocket = () => {
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
        console.log(ws.readyState)

        if (ws.readyState !== 1) {
          setTimeout(function () {
            console.log('Need to reconnect')
            reconnect()
          }, 5000)
        }
      }
      ws.onerror = (err) => {
        console.error(
          'Socket encountered error: ',
          err.message,
          'Closing socket',
        )
        ws.close()
      }
    }

    setWebSocket()
  }

  video = () => {
    const video = new JSMpeg.Player('ws://localhost:9999', {
      canvas: document.getElementById('canvas'),
    })

    console.log(video)
  }

  whoIs = () => {
    console.log('Who is there?')
  }

  openDoor = () => {
    console.log('The door is open, come in.')
  }

  entryDenied = () => {
    console.log('You are denied entry!')
  }

  render() {
    return (
      <div className="app container">
        <div className="app__wrapper">
          <VideoBlock
            whoIs={this.whoIs}
            openDoor={this.openDoor}
            entryDenied={this.entryDenied}
          />
          <TableBlock someData={this.state.messages} />
        </div>
      </div>
    )
  }
}

export default App
