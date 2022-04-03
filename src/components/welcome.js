import { Container } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
import { useUsersQuery } from '../api/UserQuery'

import { useQueryClient } from 'react-query'

function Welcome () {
  const { info, setInfo } = useContext(UserContext)
  const { getAuth } = useContext(AuthContext)

  const queryClient = useQueryClient()
  console.log('----------------------------------- queryClient', queryClient.getQueriesData('users'))

  const query = useUsersQuery()

  console.log('* ~ file: welcome.js ~ line 7 ~ value', info)

  const setAuthor = () => {
    console.log('execute')
    setInfo({ ...info, author: 'manolo' })
  }

  useEffect(() => {}, [])

  return (
    <Container maxWidth='md'>
      <div>
        <h1>Bienvenido</h1>
        <p>hola mundo</p>
        <p>hola {'' + getAuth.auth} </p>

        <button onClick={setAuthor}> cambiar </button>

        <div>
          holi world
          <div>{query.isFetching ? 'Background Updating...' : ' '}</div>
          {query.data.data.map((res) => (
            <li key={res.id}>{res.email}</li>
          ))}
        </div>

        <hr />
      </div>
    </Container>
  )
}

export default Welcome
