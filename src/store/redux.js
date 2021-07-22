import LocalService from "../services/secureStorage"

const instance = new LocalService()

let initialState = {}

let initialStateDefault = {
  menus: [
    {
      id: 1,
      nombre: "Read a bit",
    },
    {
      id: 2,
      nombre: "Do laundry",
    },
  ],
  Author: {
    name: "Marlon Arias Vargas",
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
} else {
  initialState = initialStateDefault
  instance.setJsonValue("dataInfo", initialState)
}

//console.log("initialStateDefault", initialStateDefault)

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MENU":
      return {
        ...state,
        menus: [...state.menus, action.payload],
      }
    case "DELETE_MENU":
      return {
        ...state,
        menus: state.menus.filter(menu => menu.id !== action.payload),
      }
    default:
      return state
  }
}

// Actions
const add_menu = menu => ({
  type: "ADD_MENU",
  payload: menu,
})

const delete_menu = MENUId => ({
  type: "DELETE_MENU",
  payload: MENUId,
})

export { reducer, add_menu, delete_menu, initialState }
