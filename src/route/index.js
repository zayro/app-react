import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import ListUser from "../components/ListUsers"
//import Home from "../components/home"
import Welcome from "../components/welcome"
import dataGrid from "../demo/dataGrid"
import dataTable from "../demo/dataTable"
import Auth from "../services/Auth"
import jwt from "../services/jwt"
// Views
import Home from "../views/Home/Home"
import BasicSearch from "../views/product/table"
import SignIn from "../views/SignIn"
import SignUp from "../views/SignUp"

const token = new jwt()
const instance = new Auth()

const hasAccess = namePermission => {
  //const permission = JSON.parse(token.getTokenDecode()).permissions

  const permission = token.getTokenDecode().permissions

  switch (namePermission.path) {
    case "/BasicSearch": {
      const validHome = ["admin", "user", "developer", "guest"]
      return validHome.some(element => permission.includes(element))
    }
    default:
      return true
  }
}


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("Auth.getAuth();", instance.getAuth())
  console.log("rest", rest.path)
  console.log("guard.check", token.getTokenDecode().permissions)
  return (
    <Route
      {...rest}
      render={props =>
        hasAccess(rest) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  )
}

const RoutePath = () => (
  <div>
    <Switch>
      { /* Production Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={Welcome} />
      <Route path="/ListUser" component={ListUser} />
      <PrivateRoute path="/welcome" component={Welcome} />
      <PrivateRoute path="/BasicSearch" component={BasicSearch} />

      { /* Dev Routes */}
      <Route path="/dataGrid" component={dataGrid} />
      <Route path="/dataTable" component={dataTable} />


    </Switch>
  </div>
)
export default RoutePath
