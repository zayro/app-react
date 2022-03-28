import React, { createContext, useMemo, useState } from 'react'
import { dataUser } from './provider/dataUser.js'

export const UserContext = createContext(dataUser)

export const UserProvider = (props) => {
  const [info, setInfo] = useState(dataUser)

  /*
  {
        data: info,
        updateAuthor: (name) => {
          setInfo({ ...info, author: name })
        }
      }
  */

  const value = useMemo(() => ({ info, setInfo }), [info])

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

export function UserProviderFix () {
  const [info, setInfo] = useState([])

  const value = useMemo(() => ({ info, setInfo }), [info])

  return <UserContext.Provider value={value} />
}
