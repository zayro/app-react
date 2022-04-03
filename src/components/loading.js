import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

Loading.propTypes = {
  openLoad: PropTypes.bool.isRequired
  // handlerLoad: PropTypes.func,
}

function Loading ({ openLoad }) {
  const classes = useStyles()
  // const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={openLoad}
        /*   onClick={() => {
          handlerLoad(false)
        }} */
      >
        <CircularProgress color='inherit' />
        <br />
        <Divider />

        <h3>Loading ...</h3>
      </Backdrop>
    </div>
  )
}

export default React.memo(Loading)
