import { Container } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

function Welcome () {
  const { info, setInfo } = useContext(UserContext)

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

        <button onClick={setAuthor}> cambiar </button>

        <hr />
      </div>
    </Container>
  )
}

export default Welcome
