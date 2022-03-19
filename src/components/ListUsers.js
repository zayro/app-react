import React from 'react'
import { useUsers } from '../api/useUsers'

function ListUser () {
  const query = useUsers()
  console.log(`:rocket: ~ file: ListUsers.js ~ line 6 ~ ListUser ~ query`, query)
  console.log(`:rocket: ~ file: ListUsers.js ~ line 6 ~ ListUser ~ query.data`, query.data)

  if (query.isError) {
    return <div> Error Cargando la Lista</div>
  }

  if (query.isLoading) {
    return <div>Cargando datos</div>
  }

  return (
    <div>
      holi world
      <div>{query.isFetching ? 'Background Updating...' : ' '}</div>
      {query.data.data.map(res => (
        <li key={res.id}>{res.email}</li>
      ))}
    </div>
  )
}
export default ListUser
