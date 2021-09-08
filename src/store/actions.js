const addConfig = data => {
  return {
    type: "ADD_CONFIG",
    payload: { login: data },
  }
}

const addToken = data => {
  return {
    type: "ADD_TOKEN",
    payload: data,
  }
}

const addAuth = data => {
  return {
    type: "ADD_CONFIG",
    payload: { user: data },
  }
}

export { addConfig, addToken, addAuth }
