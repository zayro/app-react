import React from 'react'

import { Avatar } from '@mui/material'

import { IoLocationOutline } from 'react-icons/io5'

import { FaRegUser } from 'react-icons/fa'
import { BiComment } from 'react-icons/bi'
export const Widget = () => {
  return (
    <>
      <div className='container-fluid mt-5 pt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card bg-danger text-white text-center'>
              <div className='p-3 text-center'>
                <i className='demo-psi-speech-bubble-3 text-white text-opacity-50 display-3 my-4' />
                <div className='display-4'>83</div>
                <p>Comments</p>
                <small className='lh-1'>74 Unapproved Comments</small>
              </div>
            </div>
          </div>

          <div className='col-sm-6'>
            {/* Stat widget */}
            <div className='card mb-1'>
              <div className='px-3 py-4 bg-dark text-white text-center rounded'>
                <i className='demo-psi-folder-with-document text-white text-opacity-50 display-4 my-3' />
              </div>
              <div className='p-3 text-center'>
                <span className='h1 fw-light'>
                  <span className='h3 align-middle'>$</span>728
                </span>
                <p>Earnings</p>
                <small className='lh-1'>2,675 Last 30 days earning</small>
              </div>
            </div>
            {/* END : Stat widget */}
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            {/* Stat widget */}
            <div className='card bg-secondary text-white mb-3 mb-xl-3'>
              <div className='card-body py-3'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='flex-shrink-0'>
                    <IoLocationOutline style={{ color: 'white', width: '4rem', height: '4rem' }} />
                  </div>
                  <div className='flex-grow-1 ms-4'>
                    <h5 className='h2 mb-0'>314,675</h5>
                    <p className='text-white text-opacity-50 mb-0'>Visit Today</p>
                  </div>
                </div>
                <div className='progress progress-md mb-2'>
                  <div
                    className='progress-bar  bg-white '
                    role='progressbar'
                    style={{ width: '35%' }}
                    aria-valuenow={35}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className='text-white text-opacity-75 mb-0'>
                  <strong>35%</strong> Higher than yesterday{' '}
                </p>
              </div>
            </div>
          </div>
          {/* END : Stat widget */}
          <div className='col-md-6'>
            {/* Stat widget */}
            <div className='card bg-primary text-white mb-3 mb-xl-3'>
              <div className='card-body py-3'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='flex-shrink-0'>
                    <IoLocationOutline style={{ color: 'white', width: '4rem', height: '4rem' }} />
                  </div>
                  <div className='flex-grow-1 ms-4'>
                    <h5 className='h2 mb-0'>5,345</h5>
                    <p className='text-white text-opacity-50 mb-0'>Items Sold</p>
                  </div>
                </div>
                <div className='progress progress-md mb-2'>
                  <div
                    className='progress-bar bg-white '
                    role='progressbar'
                    style={{ width: '80%' }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>

                <p className='text-white text-opacity-75 mb-0'>
                  <strong>954</strong> Sales in this month
                </p>
              </div>
            </div>
            {/* END : Stat widget */}
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            {/* Tile */}
            <div className='card bg-primary text-white mb-3 mb-xl-1'>
              <div className='p-3 text-center'>
                <span className='display-5'>53</span>
                <p>Sales</p>
                <i className='demo-psi-shopping-bag text-white text-opacity-50 fs-5' />
              </div>
            </div>
            {/* END : Tile */}
            {/* Tile */}
            <div className='card bg-warning text-white mb-3 mb-xl-1'>
              <div className='p-3 text-center'>
                <span className='display-5'>68</span>
                <p>Messages</p>
                <i className='demo-psi-mail text-white text-opacity-50 fs-5' />
              </div>
            </div>
            {/* END : Tile */}
          </div>
          <div className='col-sm-6'>
            {/* Tile */}
            <div className='card bg-info text-white mb-3 mb-xl-1'>
              <div className='p-3 text-center'>
                <span className='display-5'>32</span>
                <p>Projects</p>
                <i className='demo-psi-coding text-white text-opacity-50 fs-5' />
              </div>
            </div>
            {/* END : Tile */}
            {/* Tile */}
            <div className='card bg-success text-white mb-3 mb-xl-1'>
              <div className='p-3 text-center'>
                <span className='display-5'>12</span>
                <p>Reports</p>
                <i className='demo-psi-receipt-4 text-white text-opacity-50 fs-5' />
              </div>
            </div>
            {/* END : Tile */}
          </div>
        </div>

        <div className='row'>

          <div className='col-6'>
            <div className='card mb-3 mt-3 '>
              <div className='card-body py-3'>
                <div className='d-flex align-items-center'>
                  <div className='flex-shrink-0'>
                    <div className='img-md   bg-success text-white rounded-circle'>
                      <Avatar variant='circle' sx={{ width: '4rem', height: '4rem' }}>
                        <FaRegUser style={{ color: 'white', width: '2rem', height: '2rem' }} />
                      </Avatar>
                    </div>
                  </div>
                  <div className='flex-grow-1 ms-3'>
                  <div className='card-body'>
                    <h5 className='h2 mb-0'>241</h5>
                    <p className='mb-0'>Registered User</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='card mb-3 mt-3 '>
              <div className='d-flex align-items-stretch'>
                <div className='d-flex align-items-center justify-content-center flex-shrink-0 bg-danger px-4 text-white rounded-start'>
                  <BiComment style={{ color: 'white', width: '3rem', height: '3rem' }} />
                </div>
                <div className='flex-grow-1 py-3 ms-3'>
                <div className='card-body'>
                  <h5 className='h2 mb-0 text-danger'>379</h5>
                  <p className='mb-0'>Comments.</p>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12'>
            <div className='card bg-info text-white mb-3 mb-xl-3'>
              <div className='card-body py-3 d-flex align-items-stretch'>
                <div className='d-flex align-items-center justify-content-center flex-shrink-0 rounded-start'>
                  <FaRegUser style={{ color: 'white', width: '2rem', height: '2rem' }} />
                </div>
                <div className='flex-grow-1 ms-3'>
                  <h5 className='h2 mb-0'>543</h5>
                  <p className='mb-0'>New Emails</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
