import { orange } from '@material-ui/core/colors'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Outlet, useRouter } from '@tanstack/react-location'
import React, { useMemo, useState } from 'react'
import MenuNavbar from '../components/MenuNavbar'
import { dataUser } from '../context/provider/dataUser.js'
import { UserContext } from '../context/UserContext'
import LocalService from '../services/secureStorage'

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
  const instance = new LocalService()
  let dataStorage

  if (instance.getJsonValue('dataInfo')) {
    console.log('%c load info Storage', 'color: yellow; font-size: 14px')
    dataStorage = instance.getJsonValue('dataInfo')
  } else {
    dataStorage = dataUser
    instance.setJsonValue('dataInfo', dataStorage)
  }

  const [info, setInfo] = useState(dataStorage)

  const value = useMemo(
    () => ({
      info,
      setInfo
    }),
    [info]
  )

  const router = useRouter()
  return (
    <>
      <div
        className={`text-3xl duration-100 delay-0 opacity-0 ${!!router.pending ?? 'delay-500 duration-300 opacity-40'}`}
      />

      <UserContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <MenuNavbar> </MenuNavbar>
          {
            // Load Route
          }
          <Outlet />
        </ThemeProvider>
      </UserContext.Provider>
    </>
  )
}

export default App
