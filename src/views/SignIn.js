// React
import React, { useContext, useState } from 'react'
// Material Ui
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
// Route
import { useNavigate } from '@tanstack/react-location'
// Context
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext.js'
// Services
import http from '../services/http'
import { login } from '../api/Auth'
// library
import swal from 'sweetalert'
import jwtDecode from 'jwt-decode'
// Components
import Loading from '../components/loading'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const SignIn = () => {
  console.log('********************** ingresando al componente **********************')

  // add style
  const classes = useStyles()

  // use State
  const [open, setOpen] = useState(false)

  const [datos, setDatos] = useState({
    username: '',
    password: ''
  })

  const { info, setInfo } = useContext(UserContext)
  const { auth, setAuth } = useContext(AuthContext)

  const navigate = useNavigate()

  // use Function information
  const handlerLoad = (valueDefault = false) => {
    setOpen(valueDefault)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    handlerLoad(true)

    await login({ datos })
      .then(async (response) => {
        handlerLoad(false)

        console.log('* ~ file: SignIn.js ~ line 101 ~ response.data', response.data)

        const userInfo = {}

        const infoDecode = jwtDecode(response.data.token)

        userInfo.information = infoDecode.information
        userInfo.menu = infoDecode.menu
        userInfo.permissions = infoDecode.permissions

        setInfo({ ...info, dataUser: infoDecode })
        setAuth({ ...auth, role: infoDecode.role, auth: true })

        swal({
          title: 'Exitoso!',
          text: 'ingreso exitosamente',
          icon: 'success',
          button: 'cerrar',
          timer: 3000
        })

        return navigate({ to: '/welcome', replace: true })

        // document.getElementById("envio").reset()
      })
      .catch(function (error) {
        console.log(error)
        handlerLoad()
        swal({
          title: 'Ups ',
          text: 'ocurrió un problema!',
          icon: 'error',
          button: 'cerrar',
          timer: 3000
        })
      })
  }
  // capture data to form
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Container component='main'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}> </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Email Address'
            name='username'
            autoComplete='username'
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handleInputChange}
          />
          <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            Send
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                "Don't have an account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Loading openLoad={open}> </Loading>
    </Container>
  )
}

export { SignIn }
