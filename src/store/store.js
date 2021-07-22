import { createStore } from "redux"
import { reducer, initialState } from "./redux"
import LocalService from "../services/secureStorage"
const instance = new LocalService()

const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
)

store.subscribe(() => {
  // When state will be updated(in our case, when items will be fetched),
  // we will update local component state and force component to rerender
  // with new data.

  console.log("store.subscribe", store.getState())

  if (instance.getJsonValue("dataInfo")) {
    instance.setJsonValue("dataInfo", store.getState())
  }
})

export default store
