import React from 'react'
import Axios from 'axios'
import JSMpeg from '@cycjimmy/jsmpeg-player'
import VideoBlock from '../Video-block/Video-block'
import TableBlock from '../Table-block/Table-block'
import bell from '../../static/media/bell.mp3'
import './app.scss'

let ws

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tableEvents: [],
    }

    this.connect = this.connect.bind(this)
  }

  componentDidMount() {
    this.takeDataFromServ()
    this.connect()
    this.video()
  }

  takeDataFromServ = () => {
    Axios.get('http://localhost:8000/events')
      .then((res) => {
        this.setState({ tableEvents: res.data })
      })
      .catch(() => {
        console.log('The base is not available, please try again later.')
      })
  }

  connect() {
    ws = new WebSocket('ws://127.0.0.1:8888')
    const audio = new Audio(bell)
    const square = document.getElementById('whoIs')

    ws.onopen = () => {
      console.log('WebSocket Client Connected')
      this.takeDataFromServ()
    }
    ws.onmessage = (evt) => {
      const timeEvent = JSON.parse(evt.data)
      addTableEvent(timeEvent)
      const inter = setInterval(() => {
        play()
      }, 500)
      setTimeout(() => {
        clearInterval(inter)
      }, 5000)
    }
    ws.onclose = () => {
      console.log('WebSocket Client Disconnect')

      if (ws.readyState !== 1) {
        setTimeout(() => {
          console.log('Try to reconnect')
          this.connect()
        }, 5000)
      }
    }
    ws.onerror = (err) => {
      console.error('Socket encountered error: ', err.message, 'Closing socket')
      ws.close()
    }

    const play = () => {
      audio.play()
      if (square.className === 'video-buttons__child-buttons') {
        square.classList.add('video-buttons__child-buttons--call')
      } else {
        square.classList.remove('video-buttons__child-buttons--call')
      }
    }

    const addTableEvent = (timeEvent) => {
      this.setState((state) => ({
        tableEvents: [timeEvent, ...state.tableEvents],
      }))
    }
  }

  video = () => {
    const video = new JSMpeg.Player('ws://localhost:9000', {
      canvas: document.getElementById('canvas'),
    })

    console.log(video)
  }

  whoIs = () => {
    console.log('Who is there?')

    try {
      ws.send('Who is there?')
    } catch (error) {
      console.log('WebSocket doesnt worck, try to reconnect.')
    }
  }

  openDoor = () => {
    console.log('The door is open, come in.')

    try {
      ws.send('Open door')
    } catch (error) {
      console.log('WebSocket doesnt worck, try to reconnect.')
    }
  }

  entryDenied = () => {
    console.log('You are denied entry!')

    try {
      ws.send('Entry denied')
    } catch (error) {
      console.log('WebSocket doesnt worck, try to reconnect.')
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app__wrapper">
          <VideoBlock
            whoIs={this.whoIs}
            openDoor={this.openDoor}
            entryDenied={this.entryDenied}
          />
          <TableBlock tableData={this.state.tableEvents} />
        </div>
      </div>
    )
  }
}

export default App
