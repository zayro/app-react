import React from 'react'

import faker from 'faker'

// Store
import { connect } from 'react-redux'

import DataGrid from 'react-data-grid'

const createUser = () => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar()
})

const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser)

const fakeUsers = createUsers(20)
console.log(':rocket: ~ file: product.js ~ line 46 ~ fakeUsers', fakeUsers)

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Title' }
]

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
]
console.log(':rocket: ~ file: dataGRid.js ~ line 34 ~ rows', rows)

function dataGrid () {
  return <DataGrid columns={columns} rows={fakeUsers} />
}

export default connect()(dataGrid)
