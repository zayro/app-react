import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Home from "../components/home"
import Welcome from "../components/welcome"
import ListUser from "../components/ListUsers"

// Views
import SignIn from "../views/SignIn"
import dataGrid from "../views/dataGrid"
import dataTable from "../views/dataTable"

import BasicSearch from "../views/product/table"

import Auth from "../services/Auth"

const instance = new Auth()

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("console.log(Auth.getAuth());", instance.getAuth())
  return (
    <Route
      {...rest}
      render={props =>
        instance.getAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
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
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/home" component={Home} />
      <Route path="/about" component={Welcome} />
      <Route path="/ListUser" component={ListUser} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/dataGrid" component={dataGrid} />
      <Route path="/dataTable" component={dataTable} />
      <PrivateRoute path="/BasicSearch" component={BasicSearch} />

      <PrivateRoute path="/protected" component={ListUser} />
    </Switch>
  </div>
)
export default RoutePath
