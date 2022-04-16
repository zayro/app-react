import React from 'react'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
// Route
import { useNavigate } from '@tanstack/react-location'

// Provider
import { dataUser } from '../context/provider/dataUser'

function SignOut () {
  const { setInfo } = React.useContext(UserContext)
  const { getAuth, setAuth } = React.useContext(AuthContext)

  const navigate = useNavigate()

  React.useEffect(() => {
    console.log('********************** ingresando al componente SignOut **********************')
    setInfo(dataUser)
    setAuth({ auth: false, role: 'default' })

    if (!getAuth?.auth) {
      navigate({ to: '/login', replace: true })
    }
  }, [getAuth, navigate])

  return (
    <>
      <h1>ShutDown</h1>
    </>
  )
}

export { SignOut }
