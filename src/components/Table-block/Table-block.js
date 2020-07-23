import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

class TableBlock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      table: [],
    }

    console.log('Data build')
  }

  componentDidMount() {
    const newTable = this.props.tableData.map(function (curr) {
      return { dataTime: curr.datetime, eventCode: curr.cmd, photo: curr.image }
    })

    this.setState({ table: newTable })
  }

  render() {
    return (
      <div className="table-block">
        <div className="table-block__wrapper">
          <div className="table">
            <DataTable
              header="События"
              value={this.state.table}
              scrollable={true}
              scrollHeight="600px"
              loading={this.state.loading}
            >
              <Column field="dataTime" header="Дата/Время" />
              <Column field="eventCode" header="Код события" />
              <Column
                field="photo"
                header="Фото"
                body={this.brandTemplate}
                style={{ textAlign: 'center' }}
              />
            </DataTable>
          </div>
        </div>
      </div>
    )
  }
}

export default TableBlock
