import _ from 'lodash'
import { useQuery } from 'react-query'
// Load Services
import http from '../services/http'

// const url = "https://reqres.in/api/users"
const url = '/general/select/prueba'

// Request

const getUsers = async () => {
  const { data } = await http.get(url)
  return data
}

const postUsers = async (data) => {
  const sentInfo = {
    insert: 'prueba',
    values: data
  }

  return await http.post('/general/insertIncrement', sentInfo)
}

const putUsers = async (data) => {
  const sentInfo = {
    update: 'prueba',
    set: data,
    where: { id: data.id }
  }

  return await http.put('/general/update', sentInfo)
}

const deleteUsers = async (deleteCondition) => {
  // const sentInfo = { data: { delete: "prueba", condition: { id: "12" } } }

  const sentInfo = {
    data: { delete: deleteCondition.table, condition: deleteCondition.where }
  }

  if (_.isEmpty(deleteCondition.where)) {
    return false
  }

  return await http.delete('/general/delete', sentInfo)
}

const useGetUserQuery = () => {
  return useQuery(['users'], getUsers, {
    staleTime: 60 * 1000 * 5 // 1 minute persistencia de datos
    // cacheTime: 10
    // retryDelay: 4000,
    // initialData: [],
    // notifyOnChangePropsExclusions: ["isStale"],
  })
}

export { useGetUserQuery as getUserQuery, getUsers, postUsers, putUsers, deleteUsers }
