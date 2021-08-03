import { useQuery } from "react-query"
// Load the full build.

import http from "../services/http"

import _ from "lodash"

//const url = "https://reqres.in/api/users"
const url = "/general/select/prueba"

const getUsers = async () => {
  const { data } = await http.get(url)
  return data
}

// eslint-disable-next-line no-unused-vars
const postUserss = async () => {
  const sentInfo = {
    insert: "prueba",
    values: [{ id: "12", nombre: "zayro" }],
  }

  return await http.post("/general/insert", sentInfo)
}

const postUsers = async data => {
  const sentInfo = {
    insert: "prueba",
    values: data,
  }

  return await http.post("/general/insertIncrement", sentInfo)
}

const putUsers = async data => {
  const sentInfo = {
    update: "prueba",
    set: data,
    where: { id: data.id },
  }

  return await http.put("/general/update", sentInfo)
}

const deleteUsers = async deleteCondition => {
  //const sentInfo = { data: { delete: "prueba", condition: { id: "12" } } }

  const sentInfo = {
    data: { delete: deleteCondition.table, condition: deleteCondition.where },
  }

  if (_.isEmpty(deleteCondition.where)) {
    return false
  }

  return await http.delete("/general/delete", sentInfo)
}

const useUsers = () => {
  return useQuery("users", getUsers, {
    //staleTime: 60 * 1000, // 1 minute persistencia de datos
    //retryDelay: 4000,
    //initialData: [],
    //notifyOnChangePropsExclusions: ["isStale"],
  })
}

export { useUsers, postUsers, putUsers, deleteUsers }
