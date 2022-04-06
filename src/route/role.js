import React from 'react'
import Home from '../views/Home/Home'
import BasicSearch from '../views/product/table'
import { SignIn } from '../views/SignIn'
import { SignUp } from '../views/SignUp'
import { SignOut } from '../views/SignOut'
import { UserTable } from '../views/User/index'
import Welcome from '../components/welcome'
import ListUser from '../components/ListUsers'

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
    { path: '/reactTable', element: <UserTable /> },
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
    { path: '/reactTable', element: <UserTable /> },
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
