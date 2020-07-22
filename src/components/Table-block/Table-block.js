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
      cars: [
        { photo: 'Volkswagen', time: 2012, cardId: 'White', fio: 'dsad231ff' },
        { photo: 'Audi', time: 2011, cardId: 'Black', fio: 'gwregre345' },
        { photo: 'Renault', time: 2005, cardId: 'Gray', fio: 'h354htr' },
        { photo: 'BMW', time: 2003, cardId: 'Blue', fio: 'j6w54qgh' },
        { photo: 'Mercedes', time: 1995, cardId: 'White', fio: 'hrtwy34' },
        { photo: 'Volvo', time: 2005, cardId: 'Black', fio: 'jejtyj' },
        { photo: 'Honda', time: 2012, cardId: 'Yellow', fio: 'g43gr' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Jaguar', time: 2013, cardId: 'White', fio: 'greg34' },
        { photo: 'Ford', time: 2000, cardId: 'Black', fio: 'h54hw5' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
        { photo: 'Fiat', time: 2013, cardId: 'Red', fio: '245t2s' },
      ],
    }
  }

  render() {
    return (
      <div className="table-block col-md-8">
        <DataTable
          header="События"
          value={this.state.cars}
          scrollable={true}
          scrollHeight="500px"
          loading={this.state.loading}
        >
          <Column field="fio" header="ФИО" />
          <Column field="time" header="Время" />
          <Column
            field="photo"
            header="Фото"
            body={this.brandTemplate}
            style={{ textAlign: 'center' }}
          />
          <Column field="cardId" header="Пропуск" />
        </DataTable>
      </div>
    )
  }
}

export default TableBlock
