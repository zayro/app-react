import React from 'react'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
// Route
import { useNavigate } from '@tanstack/react-location'

function SignOut () {
  const { info, setInfo } = React.useContext(UserContext)
  const { getAuth, setAuth } = React.useContext(AuthContext)

  setInfo({ ...info, dataUser: {} })
  setAuth({ ...getAuth, role: {}, auth: false })

  const navigate = useNavigate()

  navigate({ to: '/', replace: true })

  return (
    <>
      <h1>ShutDown</h1>
    </>
  )
}

export { SignOut }
