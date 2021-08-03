import React from "react"

import RoutePath from "./route/index"
import MenuNavbar from "./components/MenuNavbar"
//import MenuNavbar from "./components/MenuNavbar_bootstrap"
import { connect, useSelector } from "react-redux"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import Container from "@material-ui/core/Container"

const quertCliente = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, refetchOnWindowFocus: false },
  },
})
function App() {
  const config$ = useSelector(store => store.config)
  let menu

  if (Object.prototype.hasOwnProperty.call(config$, "login")) {
    menu = <MenuNavbar></MenuNavbar>
  }
  return (
    <div>
      <QueryClientProvider client={quertCliente}>
        {menu}
        <Container component="main" maxWidth="md">
          <RoutePath />
        </Container>

        {<ReactQueryDevtools initialIsOpen />}
      </QueryClientProvider>
    </div>
  )
}

export default connect()(App)
