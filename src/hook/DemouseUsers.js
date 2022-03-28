import axios from 'axios'
import { useQuery } from 'react-query'
async function fecthUsers () {
  const response = await window.fetch('https://reqres.in/api/users?page=2')
  if (!response.ok) {
    throw new Error('Error recuperando Datos')
  }
  return response.json()
}

function useUsersFetch () {
  return useQuery('users', fecthUsers, { staleTime: 1000 })
}
/* ------------------------------------------------------------------          */
const getUsers = async () => {
  const { data } = await axios.get('https://reqres.in/api/users?page=2')
  return data
}

const useUsers = () => {
  return useQuery('users', getUsers, {
    staleTime: 1000,
    notifyOnChangePropsExclusions: ['isStale']
  })
}
export { useUsers, useUsersFetch }
