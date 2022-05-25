import React from 'react'
import { styled, Button } from '@mui/material'

export const ButtonError = styled(Button)({
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  color: '#fff',

  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
  }
})

export const Buttons = () => {
  return (
    <>
      <div className='container-fluid mt-5 pt-5  justify-content-md-center '>
        <div className='row justify-content-md-center mb-5'>
          <div className='md-6 mb-6 lg-12'>
            <button type='button' className='btn btn-primary'>
              Primary
            </button>
            <button type='button' className='btn btn-secondary'>
              Secondary
            </button>
            <button type='button' className='btn btn-success'>
              Success
            </button>
            <button type='button' className='btn btn-danger'>
              Danger
            </button>
            <button type='button' className='btn btn-warning'>
              Warning
            </button>
            <button type='button' className='btn btn-info'>
              Info
            </button>
            <button type='button' className='btn btn-light'>
              Light
            </button>
            <button type='button' className='btn btn-dark'>
              Dark
            </button>
            <button type='button' className='btn btn-link'>
              Link
            </button>
          </div>
          <hr />
          <div className='md-6 mb-6 lg-12'>
            <button type='button' className='btn btn-outline-primary'>
              Primary
            </button>
            <button type='button' className='btn btn-outline-secondary'>
              Secondary
            </button>
            <button type='button' className='btn btn-outline-success'>
              Success
            </button>
            <button type='button' className='btn btn-outline-danger'>
              Danger
            </button>
            <button type='button' className='btn btn-outline-warning'>
              Warning
            </button>
            <button type='button' className='btn btn-outline-info'>
              Info
            </button>
            <button type='button' className='btn btn-outline-light'>
              Light
            </button>
            <button type='button' className='btn btn-outline-dark'>
              Dark
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
