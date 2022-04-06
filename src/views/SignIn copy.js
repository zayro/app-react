// React
import React, { useEffect, useState } from 'react'
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

// Hook
import useAuthHook from '../hook/AuthHook'

// Components
import Loading from '../components/loading'
import { Copyright } from '../components/Copyright'

import { constant } from '../i18n/es'

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
  const { login, isLoginLoading, getAuth } = useAuthHook()

  // add style
  const classes = useStyles()

  const [datos, setDatos] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    console.log('********************** ingresando al componente SignIn **********************')

    if (getAuth?.auth) {
      navigate({ to: '/welcome', replace: true })
    }
  }, [getAuth])

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ datos })
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
            {constant.BUTTON.send}
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
      <Loading openLoad={isLoginLoading}> </Loading>
    </Container>
  )
}

export { SignIn }
