import { orange } from "@material-ui/core/colors"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
//import MenuNavbar from "./components/MenuNavbar_bootstrap"
import { connect, useSelector } from "react-redux"
import MenuNavbar from "./components/MenuNavbar"
import RoutePath from "./route/index"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2C3E50",
    },
    secondary: {
      main: "#1ABC9C",
    },
  },
  status: {
    danger: orange,
  },
})

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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={quertCliente}>
        {menu}

        <RoutePath />

        {<ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default connect()(App)
