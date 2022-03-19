const addConfig = (data) => {
  return {
    type: 'ADD_CONFIG',
    payload: { login: data }
  }
}

const addToken = (data) => {
  return {
    type: 'ADD_TOKEN',
    payload: data
  }
}

const addAuth = (data) => {
  return {
    type: 'ADD_CONFIG',
    payload: { user: data }
  }
}
const reset_config = () => ({
  type: 'RESET_CONFIG'
})

const add_menu = (data) => ({
  type: 'ADD_MENU',
  payload: data
})

const delete_menu = (data) => ({
  type: 'DELETE_MENU',
  payload: data
})

const reset_menu = () => ({
  type: 'DELETE_MENU'
})

const reset_token = () => ({
  type: 'RESET_TOKEN'
})

export { addConfig, add_menu, delete_menu, reset_menu, reset_config, reset_token, addToken, addAuth }
