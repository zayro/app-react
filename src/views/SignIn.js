import React, { useState } from "react"
// Route
import { Redirect } from "react-router-dom"

// Material Ui
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

// library
import swal from "sweetalert"

// Services
import http from "../services/http"

// Store
import { connect, useSelector, useDispatch } from "react-redux"

import jwt from "../services/jwt"

import Auth from "../services/Auth"

const token = new jwt()
const instance = new Auth()

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function SignIn() {
  console.log("ingresando al componente")
  const config$ = useSelector(store => store.config)

  const dispatch = useDispatch()

  // add style
  const classes = useStyles()

  const [datos, setDatos] = useState({
    username: "",
    password: "",
  })

  const addConfig = data => {
    dispatch({
      type: "ADD_CONFIG",
      payload: { login: data },
    })
  }

  const addToken = data => {
    dispatch({
      type: "ADD_TOKEN",
      payload: data,
    })
  }

  const addAuth = data => {
    dispatch({
      type: "ADD_CONFIG",
      payload: { user: data },
    })
  }
  // send information
  const handleSubmit = event => {
    event.preventDefault()
    console.log("enviando datos...", datos)
    http
      .request({
        method: "post",
        url: `/login`,
        data: datos,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response)

        addConfig(response.data)
        addToken(response.data.token)
        addAuth({ auth: true })
        token.getToken()
        instance.getAuth()
        swal({
          title: "Exitoso!",
          text: `ingreso exitosamente`,
          icon: "success",
          button: "cerrar",
          timer: 3000,
        })

        //document.getElementById("envio").reset()
      })
      .catch(function (error) {
        console.log(error)
        swal({
          title: "opps ",
          text: `ocurrio un problema!`,
          icon: "error",
          button: "cerrar",
          timer: 3000,
        })
      })
  }
  // capture data to form
  const handleInputChange = event => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  if (config$.login) {
    console.log(config$.login.status)
    return <Redirect to="/welcome" />
  } else {
    console.log("user not login")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default connect()(SignIn)
