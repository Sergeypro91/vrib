import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

class TableBlock extends React.PureComponent {
  constructor(props) {
    console.log(props)
    super(props)

    this.state = {}
  }

  brandTemplate(tableData, column) {
    const src = `${tableData.image}`

    if (tableData.image) {
      return <img src={src} alt="img" width="48px" />
    } else {
      return (
        <img
          src={src}
          srcSet="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
          alt="img"
          width="48px"
        />
      )
    }
  }

  render() {
    const { tableData } = this.props

    return (
      <div className="table-block">
        <div className="table-block__wrapper">
          <div className="table">
            <DataTable
              header="События"
              value={tableData}
              scrollable={true}
              scrollHeight="600px"
              loading={this.state.loading}
            >
              <Column field="datetime" header="Дата/Время" />
              <Column field="cmd" header="Код события" />
              <Column
                field="image"
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
