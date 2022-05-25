import React, { useEffect, useState } from 'react'

import { Outlet, useRouter } from '@tanstack/react-location'
// component
import MenuNavbar from '../components/MenuNavbar'
import { Loading } from '../components/loading'
// provider
import { UserProvider } from '../context/UserContext'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const router = useRouter()
  console.log('* ~ file: App.js ~ line 26 ~ router', router)

  const [onlineStatus, setOnlineStatus] = useState(false)
  console.log('* ~ onlineStatus', onlineStatus)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(true)
    })
    window.addEventListener('online', () => {
      setOnlineStatus(false)
    })

    window.addEventListener('resize', () => {
      console.log('innerWidth', window.innerWidth, 'innerHeight', window.innerHeight)
    })

    window.onload = function () {
      console.log(' window.onload ')
    }
  }, [])

  return (
    <>
      <Loading
        openLoad={onlineStatus}
        color='#FFFFFF'
        text='Not Internet Disconected App'
        bgcolor='rgba(0, 0, 0, 1)'
        handlerLoad={setOnlineStatus}
      />
      <UserProvider>
        <MenuNavbar> </MenuNavbar>
        <Outlet />
      </UserProvider>
    </>
  )
}

export default App
