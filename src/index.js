import { ReactLocation, Router } from '@tanstack/react-location'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import React, { useContext, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import * as serviceWorker from './serviceWorker'

import './style/global.css'

// components
import App from './views/App'
// context
import { AuthProvider, AuthContext } from './context/AuthContext.js'
// roue
import { role } from './route/role'

const queryCliente = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, refetchOnWindowFocus: false }
  }
})

// const history = createHashHistory()
const location = new ReactLocation()

const Security = () => {
  const { getAuth } = useContext(AuthContext)
  let pathRoute

  useEffect(() => {
    console.log('*********** Security ***************', getAuth)
  }, [getAuth])

  const getRole = getAuth.role.toLowerCase()

  if (role[getRole]) {
    pathRoute = role[getRole]()
  } else {
    pathRoute = role.default()
  }

  return (
    <>
      <Router defaultPendingElement={<div>Cargando .....</div>} routes={pathRoute} location={location}>
        <App />
        <ReactLocationDevtools position='bottom-right' />
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </>
  )
}

const Main = () => {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryCliente}>
          <Security />
        </QueryClientProvider>
      </AuthProvider>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Main />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
