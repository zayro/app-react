import { CircularProgress, Divider, Backdrop } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'

Loading.propTypes = {
  openLoad: PropTypes.bool.isRequired
  // handlerLoad: PropTypes.func,
}

function Loading ({ openLoad }) {
  // const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
