import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"

const routeMenu = menu => {
  switch (menu) {
    case "welcome":
      history.push(`/welcome`)
      setOpen(false)

      break
    case "table":
      history.push(`/BasicSearch`)
      setOpen(false)

      break

    default:
      console.log("default")
      break
  }
}

;<Drawer
  className={classes.drawer}
  variant="persistent"
  anchor="left"
  open={open}
  classes={{
    paper: classes.drawerPaper,
  }}
>
  <div className={classes.drawerHeader}>
    <strong>Menu</strong>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </div>
  <Divider />
  <List>
    <ListItem button onClick={() => routeMenu("welcome")}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={"Home"} />
    </ListItem>
    <ListItem button onClick={() => routeMenu("table")}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={"Table"} />
    </ListItem>
  </List>
</Drawer>
