import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"
import Slide from "@material-ui/core/Slide"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import Icon from "@material-ui/core/icon"
import Drawer from "@material-ui/core/Drawer"

import { Link, animateScroll as scroll, Element, Events } from "react-scroll"

import hero from "../../assets/img/home/hero.svg"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    minHeight: "100vh",
  },
  GridMenu: {
    flexGrow: 1,
  },
  fullScreen: {
    height: "80vh",
    //border: "3px solid green",
  },
  link: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  AppLogo: {
    margin: "auto",
    width: "50%",
    //border: "3px solid green",
    textAlign: "center",
    padding: "10px",
  },
  imgHome: {
    margin: "auto",
    width: "50%",
  },
  container: {
    marginTop: "100px",
    background: "none",
  },
  bullet: {
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  body: {
    background: "none",
    backgroundColor: "transparent",
  },
  appBar: {
    background: "none",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  if (!trigger) {
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    )
  } else {
    return false
  }
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}
function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

const width = window.innerWidth > 0 ? window.innerWidth : 240
const drawerWidth = width

export default function Home(props) {
  const classes = useStyles()
  const theme = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="inherit" elevation={0}>
        <HideOnScroll {...props}>
          <Typography variant="h2" align="center">
            Company
          </Typography>
        </HideOnScroll>
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            spacing={4}
            className={classes.sectionDesktop}
          >
            <Grid item>
              <Typography className={classes.link}>
                <Link
                  activeClass="active"
                  to="test2"
                  spy={true}
                  smooth={true}
                  offset={200}
                  duration={500}
                  //onSetActive={this.handleSetActive}
                >
                  Test 1
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.link}>
                <Link>Feature</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.link}>
                <Link>Services</Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.link}>
                <Link>Contact</Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Container>
        <Element name="test1" className="element">
          <Box mx="auto" mt={5} className={classes.fullScreen}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Box mt={5}>
                  <Paper elevation={1} />
                  <Typography variant="h4" align="center">
                    Super Simple Bootstrap HTML5 Template For Business, SaaS and
                    Apps
                  </Typography>
                  <Paper />
                </Box>
              </Grid>
              <Grid className={classes.AppLogo} item xs={12}>
                <img src={hero} className={classes.imgHome} alt="logo" />
              </Grid>
            </Grid>
          </Box>
        </Element>
        <Element name="test2" className="element">
          <Box mt={10}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              alignContent="center"
              spacing={1}
            >
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="subtitle1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nobis praesentium ratione quam reprehenderit repellendus.
                      Nobis rerum repellat doloribus hic reprehenderit nostrum
                      quia, eos atque veniam autem eligendi in adipisci at?
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="subtitle1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nobis praesentium ratione quam reprehenderit repellendus.
                      Nobis rerum repellat doloribus hic reprehenderit nostrum
                      quia, eos atque veniam autem eligendi in adipisci at?
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="subtitle1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nobis praesentium ratione quam reprehenderit repellendus.
                      Nobis rerum repellat doloribus hic reprehenderit nostrum
                      quia, eos atque veniam autem eligendi in adipisci at?
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Element>
      </Container>

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  )
}
