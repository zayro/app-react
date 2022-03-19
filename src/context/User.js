import React, { createContext, useState } from 'react'

export const UserContext = createContext({
  dataUser: {},
  dataConf: {},
  author: 'Marlon Zayro Arias Vargas'
})

export function UserProvider ({ data }) {
  const [info, setInfo] = useState([])

  return <UserContext.Provider value={info} />
}
