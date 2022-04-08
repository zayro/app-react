import React from 'react'
import Home from '../views/Home/Home'

import Welcome from '../components/welcome'
import ListUser from '../components/ListUsers'

// Pages
import BasicSearch from '../views/products/table'
import { SignIn } from '../views/SignIn/SignIn'
import { SignUp } from '../views/SignUp'
import { SignOut } from '../views/SignOut'

import { Error404 } from '../views/404/404'

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
