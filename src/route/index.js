import React from 'react'

import ListUser from '../components/ListUsers'
import Welcome from '../components/welcome'

// Views
import Home from '../views/Home/Home'
import BasicSearch from '../views/product/table'
import { SignIn } from '../views/SignIn'
import SignUp from '../views/SignUp'
import { UserTable } from '../views/User/index'

// eslint-disable-next-line react/prop-types

const admin = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <SignIn /> },
  { path: '/SignUp', element: <SignUp /> },
  { path: '/welcome', element: <Welcome /> },
  { path: '/BasicSearch', element: <BasicSearch /> },
  { path: '/ListUser', element: <ListUser /> },
  { path: '/dataGrid', element: <dataGrid /> },
  { path: '/reactTable', element: <UserTable /> },
  { path: '*', element: <h1>Page Not Found</h1> }
]

const develop = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <SignIn /> },
  { path: '*', element: <h1>Page Not Found</h1> }
]

export { admin, develop }
