import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
import { useUsersQuery } from '../api/UserQuery'

import { useQueryClient } from 'react-query'

// React-Bootstrap
import Container from 'react-bootstrap/Container'

function Welcome () {
  const { info, setInfo } = useContext(UserContext)
  const { getAuth } = useContext(AuthContext)

  const queryClient = useQueryClient()
  console.log('----------------------------------- queryClient', queryClient.getQueriesData('users'))

  const query = useUsersQuery()

  console.log('* ~ file: welcome.js ~ line 18 ~ value', query)

  const setAuthor = () => {
    console.log('execute')
    setInfo({ ...info, author: 'manolo' })
  }

  if (query.isError) {
    return <div> Error Cargando la Lista</div>
  }

  if (query.isLoading) {
    return <div>Cargando datos</div>
  }

  // useEffect(() => {}, [])

  return (
    <Container>
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
