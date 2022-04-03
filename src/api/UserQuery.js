import axios from 'axios'
import { useQuery } from 'react-query'

const getUsers = async () => {
  const { data } = await axios.get('https://reqres.in/api/users?page=2')
  return data
}

const useUsersQuery = () => {
  return useQuery('users', getUsers, {
    notifyOnChangePropsExclusions: ['isStale'],
    staleTime: 1000 * 60 * 1
  })
}
export { useUsersQuery }
