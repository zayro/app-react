import React from 'react'

import { Outlet, useRouter } from '@tanstack/react-location'
// component
import MenuNavbar from '../components/MenuNavbar'
// provider
import { UserProvider } from '../context/UserContext'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const router = useRouter()
  console.log('* ~ file: App.js ~ line 26 ~ router', router)

  return (
    <>
      <UserProvider>
        <MenuNavbar> </MenuNavbar>
        <div className='container-fluid mt-5 pt-5'>
          <Outlet />
        </div>
      </UserProvider>
    </>
  )
}

export default App
