import { orange } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { connect, useSelector } from 'react-redux'
import MenuNavbar from '../components/MenuNavbar'
import { UserContext } from '../context/User'
import RoutePath from '../route/index'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2C3E50'
    },
    secondary: {
      main: '#1ABC9C'
    }
  },
  status: {
    danger: orange
  }
})

const queryCliente = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, refetchOnWindowFocus: false }
  }
})
function App () {
  const config$ = useSelector((store) => store.config)
  let menu

  if (Object.prototype.hasOwnProperty.call(config$, 'login')) {
    menu = <MenuNavbar> </MenuNavbar>
  }
  return (
    <UserContext.Provider
      value={{
        dataUser: {},
        dataConf: {},
        author: 'Marlon Zayro Arias Vargas'
      }}
    >
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryCliente}>
          {menu}

          <RoutePath />

          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default connect()(App)
