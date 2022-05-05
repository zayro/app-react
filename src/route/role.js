import React from 'react'
import Home from '../views/Home/Home'

import Welcome from '../components/welcome'
import ListUser from '../components/ListUsers'

// Pages
import BasicSearch from '../views/products/table'
import { SignIn } from '../views/SignIn/SignIn'
import { SignUp } from '../views/SignUp'
import { SignOut } from '../views/SignOut'
import { ConfigUser } from '../views/Admin/ConfigUser/ConfigUser'

// Components
import { Panels } from '../components/Panels'
import { Cards } from '../components/Cards'
import { Buttons } from '../components/Buttons'

// Pages General
import { Error404 } from '../views/404/404'

// NOTE - This is the main navigation object
export const role = {
  admin: () => [
    { path: '/', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/SignOut', element: <SignOut /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/BasicSearch', element: <BasicSearch /> },
    { path: '/ListUser', element: <ListUser /> },
    { path: '/dataGrid', element: <dataGrid /> },
    { path: '/config', element: <ConfigUser /> },

    { path: '*', element: <Error404 /> }
  ],
  developer: () => [
    { path: '/', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/SignOut', element: <SignOut /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/BasicSearch', element: <BasicSearch /> },
    { path: '/ListUser', element: <ListUser /> },
    { path: '/dataGrid', element: <dataGrid /> },
    { path: '/config', element: <ConfigUser /> },
    { path: '/Panels', element: <Panels /> },
    { path: '/Cards', element: <Cards /> },
    { path: '/Buttons', element: <Buttons /> },

    { path: '*', element: <Error404 /> }
  ],
  default: () => [
    { path: '/', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/SignOut', element: <SignOut /> },
    { path: '*', element: <Error404 /> }
  ]
}
