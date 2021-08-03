import { useQuery } from "react-query"
import axios from "axios"

const getUsers = async () => {
  setTimeout(async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=2")
    return data
  }, 90500)
}

const useUsers = () => {
  return useQuery("users", getUsers, {
    staleTime: 1000,
    notifyOnChangePropsExclusions: ["isStale"],
  })
}
export { useUsers }
