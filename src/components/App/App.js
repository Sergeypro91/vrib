import React from 'react'
import JSMpeg from '@cycjimmy/jsmpeg-player'
import VideoBlock from '../Video-block/Video-block'
import TableBlock from '../Table-block/Table-block'
import bell from './bell.mp3'

import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tableEvents: [],
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8000/events')
      .then((res) => {
        this.setState({ tableEvents: res.data })
      })
      .catch((error) => {
        console.log(error)
      })

    this.connect()
    this.video()
    this.tableParse()
  }

  addTableEvent = (timeEvent) => {
    this.setState((state) => ({
      tableEvents: [timeEvent, ...state.tableEvents],
    }))
  }

  connect = () => {
    const square = document.getElementById('whoIs')
    const audio = new Audio(bell)

    function play() {
      audio.play()
      if (square.style.backgroundColor === 'red') {
        square.style.backgroundColor = '#fff'
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
        const timeEvent = JSON.parse(evt.data)
        this.addTableEvent(timeEvent)
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

  tableParse() {
    const newTable = this.state.tableEvents.map(function (curr) {
      return { dataTime: curr.datetime, eventCode: curr.cmd, photo: curr.image }
    })

    console.log(newTable)

    return newTable

    // this.setState({ table: newTable })
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
          <TableBlock tableData={this.tableParse()} />
        </div>
      </div>
    )
  }
}

export default App
