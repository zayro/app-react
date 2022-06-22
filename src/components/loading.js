import PropTypes from 'prop-types'
import React from 'react'

import { CircularProgress, Backdrop, Typography, Stack } from '@mui/material'

import '../assets/style/spinner.scss'

Loading.propTypes = {
  openLoad: PropTypes.bool.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  handlerLoad: PropTypes.func
}

function Loading ({ openLoad = true, text = ' Loading', color = '#fff', bgcolor = 'rgba(0, 0, 0, 1)', handlerLoad }) {
  return (
    <Backdrop
      sx={{
        bgcolor: { bgcolor },
        color: { color },
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={openLoad}
      onClick={() => {
        handlerLoad(false)
      }}
    >
      <Stack spacing={2} justifyContent='center' alignItems='center'>
        <CircularProgress color='inherit' size={80} />

        <Typography gutterBottom variant='h4' component='div' sx={{ padding: '10px' }}>
          {text}
        </Typography>
      </Stack>
    </Backdrop>
  )
}

function LoadingWifi () {
  return (
    <>
      <Backdrop open>
        <div id='wifi-loader'>
          <div>
            <svg className='circle-outer' viewBox='0 0 86 86'>
              <circle className='back' cx={43} cy={43} r={40} />
              <circle className='front' cx={43} cy={43} r={40} />
              <circle className='new' cx={43} cy={43} r={40} />
            </svg>
            <svg className='circle-middle' viewBox='0 0 60 60'>
              <circle className='back' cx={30} cy={30} r={27} />
              <circle className='front' cx={30} cy={30} r={27} />
            </svg>
            <svg className='circle-inner' viewBox='0 0 34 34'>
              <circle className='back' cx={17} cy={17} r={14} />
              <circle className='front' cx={17} cy={17} r={14} />
            </svg>
            <div className='text' data-text='Loading ..' />
          </div>
        </div>
      </Backdrop>
    </>
  )
}

export { Loading, LoadingWifi }
