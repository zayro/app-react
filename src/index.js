import { ReactLocation, Router } from '@tanstack/react-location'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import React, { useContext, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Loading } from './components/loading'

// components
import App from './views/App'
// context
import { AuthProvider, AuthContext } from './context/AuthContext.js'
// roue
import { role } from './route/role'

// serviceWorker
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

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
      <Router
        defaultPendingElement={
          <div className='container'>
            {' Cargando ...'}
            <Loading openLoad />
          </div>
        }
        routes={pathRoute}
        location={location}
      >
        <App />

        {process.env.ENVIRONMEN === 'development' ?? (
          <>
            <ReactLocationDevtools position='bottom-right' />
            <ReactQueryDevtools initialIsOpen={false} />
          </>
        )}
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

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    // Corremos este código si hay una nueva versión de nuestra app
    // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister()
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload()
    }
  }
})
