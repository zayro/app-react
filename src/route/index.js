import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import SignIn from "../components/SignIn"
import Home from "../components/home"
import Welcome from "../components/welcome"
import ListUser from "../components/ListUsers"

import Auth from "../services/Auth"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.getAuth() ? (
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
      <PrivateRoute path="/protected" component={ListUser} />
    </Switch>
  </div>
)
export default RoutePath
