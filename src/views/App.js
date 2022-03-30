import React from 'react'
import { orange } from '@material-ui/core/colors'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Outlet, useRouter } from '@tanstack/react-location'
import MenuNavbar from '../components/MenuNavbar'

import { UserProvider } from '../context/UserContext'

const theme = createTheme({
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

function App () {
  const router = useRouter()
  console.log('* ~ file: App.js ~ line 26 ~ router', router)

  return (
    <>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <MenuNavbar> </MenuNavbar>
          {
            // Load Route
          }
          <Outlet />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
