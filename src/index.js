import { createHashHistory, ReactLocation, Router } from '@tanstack/react-location'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'
import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { routes } from './route/'
import * as serviceWorker from './serviceWorker'
// components
import App from './views/App'

const queryCliente = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, refetchOnWindowFocus: false }
  }
})

// StrictMode (from version 16.3)

const history = createHashHistory()
const location = new ReactLocation({ history })

ReactDOM.render(
  <QueryClientProvider client={queryCliente}>
    <Router defaultPendingElement={<div>Cargando .....</div>} routes={routes} location={location}>
      <App />
      <ReactLocationDevtools position='bottom-right' />
    </Router>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root')
)

/*
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
