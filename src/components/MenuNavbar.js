import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Icon from '@material-ui/core/icon'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import React, { useContext } from 'react'
// Context
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
// Route
import { Link, useNavigate } from '@tanstack/react-location'
// localstorage
import LocalService from '../services/secureStorage'

const width = window.innerWidth > 0 ? 600 : 240
const drawerWidth = width

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}))

export default function MenuNavbar () {
  const storage = new LocalService()
  const { info, setInfo } = useContext(UserContext)
  const { getAuth, setAuth } = useContext(AuthContext)
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const singOff = () => {
    console.log('**************** SHUTDOWN APP****************')
    setInfo({ ...info, dataUser: {} })
    setAuth({ ...getAuth, auth: false, role: 'default' })
    storage.removeItem('acceso')

    navigate({ to: '/', replace: true })
  }

  const auth = { menu: [{ menu: '', link: '', icon: '' }] }

  if (getAuth.auth) {
    auth.menu = info.dataUser.menu
  } else {
    return <></>
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Bienvenido
          </Typography>
          <IconButton aria-label='display more actions' edge='end' color='inherit' onClick={singOff}>
            <Icon>power_settings_new</Icon>
          </IconButton>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <strong>Menu</strong>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {auth.menu.map((item, i) => (
            <ListItem key={i} button onClick={() => setOpen(false)}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.menu}
              </Link>
            </ListItem>
          ))}
          <Link to='ListUser'>ListUsers</Link>
          <Link to='welcome'>Welcome</Link>
        </List>

        {/* {JSON.stringify(auth.tokenDecode.menu)} */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  )
}
