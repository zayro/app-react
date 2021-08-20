import { createStore } from "redux"
import { reducer } from "./redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import LocalService from "../services/secureStorage"
const instance = new LocalService()

const store = createStore(
  reducer,
  devToolsEnhancer()
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
)

store.subscribe(() => {
  // When state will be updated(in our case, when items will be fetched),
  // we will update local component state and force component to rerender
  // with new data.

  console.log("store.subscribe", store.getState())

  if (instance.getJsonValue("dataInfo")) {
    console.log("%c update info Storage", "color: yellow; font-size: 14px")
    instance.setJsonValue("dataInfo", store.getState())
  }
})

export default store
