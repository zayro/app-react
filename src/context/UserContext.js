import React, { createContext, useMemo, useState, useEffect } from 'react'
import { dataUser } from './provider/dataUser.js'
import LocalService from '../services/secureStorage'

const instance = new LocalService()
let dataStorage

if (instance.getJsonValue('dataInfo')) {
  dataStorage = instance.getJsonValue('dataInfo')
  console.log('%c load info Storage', 'color: yellow; font-size: 14px', dataStorage)
  // Show instance.getJsonValue('dataInfo')
} else {
  console.log('%c new info Storage', 'color: green; font-size: 14px', dataStorage)
  dataStorage = dataUser
  instance.setJsonValue('dataInfo', dataStorage)
}

export const UserContext = createContext(dataStorage)

export const UserProvider = ({ children }) => {
  const [info, setInfo] = useState(dataStorage)

  useEffect(() => {
    console.log('*****************************', info)
    instance.setJsonValue('dataInfo', info)
    instance.setJsonValueDefault('dataInfoTest', info)
  }, [info])

  return <UserContext.Provider value={{ info, setInfo }}>{children}</UserContext.Provider>
}

export function UserProviderFix () {
  const [info, setInfo] = useState([])

  const value = useMemo(() => ({ info, setInfo }), [info])

  return <UserContext.Provider value={value} />
}
