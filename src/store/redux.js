import { combineReducers } from "redux"
import LocalService from "../services/secureStorage"

const instance = new LocalService()

let initialState = {}

let initialStateDefault = {
  menu: [
    {
      id: 1,
      nombre: "menu",
    },
  ],
  config: {
    author: "MZ",
  },
}

/* Not security */
/*
if (instance.getJsonValueDefault("dataInfo")) {
initialState = instance.getJsonValueDefault("dataInfo")
} else {
initialState = initialStateDefault
instance.setJsonValueDefaul("dataInfo", initialState)
}
*/

/* Security */
if (instance.getJsonValue("dataInfo")) {
  initialState = instance.getJsonValue("dataInfo")
  console.log(
    `:rocket: ~ file: redux.js ~ line 35 ~ initialState`,
    initialState
  )
} else {
  initialState = initialStateDefault
  instance.setJsonValue("dataInfo", initialState)
}

//console.log("initialStateDefault", initialStateDefault)

// Reducer
const menu = (state = initialState.menu, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return state.concat([action.payload])
    case "DELETE_MENU":
      return state.filter(data => data.id !== action.payload.id)
    case "EDIT_MENU":
      return state.map(data =>
        data.id === data.id ? { ...data, editing: !data.editing } : data
      )
    case "UPDATE_MENU":
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing,
          }
        } else return post
      })
    default:
      return state
  }
}
const config = (state = initialState.config, action) => {
  switch (action.type) {
    case "ADD_CONFIG":
      return {
        ...state,
        ...action.payload,
      }
    case "DELETE_CONFIG":
      return state.filter(data => data.id !== action.payload.id)
    case "EDIT_CONFIG":
      return state.map(data =>
        data.id === data.id ? { ...data, editing: !data.editing } : data
      )

    default:
      return state
  }
}

// Actions
const add_menu = data => ({
  type: "ADD_MENU",
  payload: data,
})

const delete_menu = data => ({
  type: "DELETE_MENU",
  payload: data,
})

const reducer = combineReducers({
  config,
  menu,
})

export { reducer, add_menu, delete_menu, initialState }
