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
        {
          photo: 'Volkswagen',
          eventCode: 2012,
          cardId: 'White',
          dataTime: 'dsad231ff',
        },
        {
          photo: 'Audi',
          eventCode: 2011,
          cardId: 'Black',
          dataTime: 'gwregre345',
        },
        {
          photo: 'Renault',
          eventCode: 2005,
          cardId: 'Gray',
          dataTime: 'h354htr',
        },
        { photo: 'BMW', eventCode: 2003, cardId: 'Blue', dataTime: 'j6w54qgh' },
        {
          photo: 'Mercedes',
          eventCode: 1995,
          cardId: 'White',
          dataTime: 'hrtwy34',
        },
        {
          photo: 'Volvo',
          eventCode: 2005,
          cardId: 'Black',
          dataTime: 'jejtyj',
        },
        {
          photo: 'Honda',
          eventCode: 2012,
          cardId: 'Yellow',
          dataTime: 'g43gr',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        {
          photo: 'Jaguar',
          eventCode: 2013,
          cardId: 'White',
          dataTime: 'greg34',
        },
        { photo: 'Ford', eventCode: 2000, cardId: 'Black', dataTime: 'h54hw5' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
        { photo: 'Fiat', eventCode: 2013, cardId: 'Red', dataTime: '245t2s' },
      ],
    }
  }

  render() {
    return (
      <div className="table-block">
        <div className="table-block__wrapper">
          <div className="table">
            <DataTable
              header="События"
              value={this.state.cars}
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
