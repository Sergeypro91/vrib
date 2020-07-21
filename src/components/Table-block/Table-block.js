import React from 'react'

class TableBlock extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
  }

  render() {
    return (
      <div className="new">
        <div className="table-block">{this.data}</div>
      </div>
    )
  }
}

export default TableBlock
