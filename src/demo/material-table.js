import React from 'react'
import MaterialTable from 'material-table'
// Store
import { connect } from 'react-redux'

import faker from 'faker'

function BasicSearch () {
  const createUser = () => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    surname: faker.name.middleName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar()
  })

  const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser)

  const fakeUsers = createUsers(20)

  return (
    <div style={{ marginTop: 20 }}>
      <MaterialTable
        title='Basic Search Preview'
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Email', field: 'email' }
        ]}
        data={fakeUsers}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => console.log('You saved ' + rowData.name)
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => console.log('You want to delete ' + rowData.name)
          }
        ]}
        options={{
          exportButton: true,
          search: true,
          filtering: true,
          sorting: true
        }}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}',
            labelRowsSelect: 'Registos'
          },
          toolbar: {
            nRowsSelected: '{0} row(s) selected'
          },
          header: {
            actions: 'Eventos'
          },
          body: {
            emptyDataSourceMessage: 'No hay Registros',
            filterRow: {
              filterTooltip: 'Filtro'
            }
          }
        }}
      />
    </div>
  )
}

export default connect()(BasicSearch)
