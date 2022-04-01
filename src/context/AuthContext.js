import React, { createContext, useState, useEffect } from 'react'

import LocalService from '../services/secureStorage'

const dataAuth = {
  auth: false,
  role: 'default'
}

const instance = new LocalService()
let dataStorageAuth

if (instance.getJsonValue('acceso')) {
  dataStorageAuth = instance.getJsonValue('acceso')
  console.log('%c  auth Storage', 'color: yellow; font-size: 14px', dataStorageAuth)
} else {
  console.log('%c new auth Storage', 'color: green; font-size: 14px', dataStorageAuth)
  dataStorageAuth = dataAuth
  instance.setJsonValue('acceso', dataStorageAuth)
  instance.setJsonValueDefault('accesoTest', dataStorageAuth)
}

export const AuthContext = createContext(dataStorageAuth)

export const AuthProvider = ({ children }) => {
  const [getAuth, setAuth] = useState(dataStorageAuth)

  useEffect(() => {
    console.log('**************************', getAuth)
    instance.setJsonValue('acceso', getAuth)
    instance.setJsonValueDefault('accesoTest', getAuth)
  }, [getAuth])

  return <AuthContext.Provider value={{ getAuth, setAuth }}>{children}</AuthContext.Provider>
}
