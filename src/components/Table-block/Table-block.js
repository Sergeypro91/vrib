import React from 'react'

class TableBlock extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return <div className="table-block">{this.props.someData}</div>
  }
}

export default TableBlock
