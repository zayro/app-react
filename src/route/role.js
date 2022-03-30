import React from 'react'
import Home from '../views/Home/Home'
import BasicSearch from '../views/product/table'
import { SignIn } from '../views/SignIn'
import SignUp from '../views/SignUp'
import { UserTable } from '../views/User/index'
import Welcome from '../components/welcome'
import ListUser from '../components/ListUsers'

export const role = {
  admin: () => [
    { path: '/', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/BasicSearch', element: <BasicSearch /> },
    { path: '/ListUser', element: <ListUser /> },
    { path: '/dataGrid', element: <dataGrid /> },
    { path: '/reactTable', element: <UserTable /> },
    { path: '*', element: <h1>Page Not Found</h1> }
  ],
  developer: () => [
    { path: '/', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/BasicSearch', element: <BasicSearch /> },
    { path: '/ListUser', element: <ListUser /> },
    { path: '/dataGrid', element: <dataGrid /> },
    { path: '/reactTable', element: <UserTable /> },
    { path: '*', element: <h1>Page Not Found</h1> }
  ],
  default: () => [
    { path: '/', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/SignUp', element: <SignUp /> },
    { path: '*', element: <h1>Page Not Found</h1> }
  ]
}
