import React from 'react'

// import { FaRegUser } from 'react-icons/fa'
import { MdFavorite, MdStar } from 'react-icons/md'

export const Buttons = () => {
  return (
    <>
      <div className='container-fluid mt-5 pt-5'>
        <div className='row'>
          <div className='col-sm-6 mb-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Outline buttons</h5>
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-outline-primary'>Primary</button>
                  <button type='button' className='btn btn-outline-secondary'>Secondary</button>
                  <button type='button' className='btn btn-outline-success'>Success</button>
                  <button type='button' className='btn btn-outline-danger'>Danger</button>
                  <button type='button' className='btn btn-outline-warning'>Warning</button>
                  <button type='button' className='btn btn-outline-info'>Info</button>
                  <button type='button' className='btn btn-outline-light'>Light</button>
                  <button type='button' className='btn btn-outline-dark'>Dark</button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 mb-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Rounded buttons</h5>
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-primary rounded-pill'>Primary</button>
                  <button type='button' className='btn btn-secondary rounded-pill'>Secondary</button>
                  <button type='button' className='btn btn-success rounded-pill'>Success</button>
                  <button type='button' className='btn btn-danger rounded-pill'>Danger</button>
                  <button type='button' className='btn btn-warning rounded-pill'>Warning</button>
                  <button type='button' className='btn btn-info rounded-pill'>Info</button>
                  <button type='button' className='btn btn-light rounded-pill'>Light</button>
                  <button type='button' className='btn btn-dark rounded-pill'>Dark</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Icon buttons with text</h5>
                {/* Icon buttons with text */}
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-info text-white'>
                    <MdFavorite style={{ color: 'white', width: '1.5rem', height: '1.5rem' }} className='fs-5 me-2' />   Wishlist
                  </button>
                  <button type='button' className='btn btn-warning rounded-pill text-white'>
                    <MdStar style={{ color: 'white', width: '1.5rem', height: '1.5rem' }} className='fs-5 me-2' /> Favorite
                  </button>
                </div>
                {/* END : Icon buttons with text */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Icon buttons with border</h5>
                {/* Icon buttons with border */}
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-info hstack gap-2'>
                    <i className='demo-psi-heart-2 fs-5' />
                    <span className='vr' />
                    Wishlist
                  </button>
                  <button type='button' className='btn btn-warning hstack gap-2 rounded-pill'>
                    <i className='demo-psi-star fs-5' />
                    <span className='vr' />
                    Favorite
                  </button>
                </div>
                {/* END : Icon buttons with border */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Icon buttons</h5>
                {/* Icon buttons */}
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-icon btn-secondary'>
                    <i className='demo-psi-speech-bubble-3 fs-5' />
                  </button>
                  <button type='button' className='btn btn-icon btn-success'>
                    <i className='demo-psi-recycling icon-lg fs-5' />
                  </button>
                  <button type='button' className='btn btn-icon btn-danger rounded-circle'>
                    <i className='demo-psi-home fs-5' />
                  </button>
                  <button type='button' className='btn btn-icon btn-primary rounded-circle'>
                    <i className='demo-psi-tag icon-lg fs-5' />
                  </button>
                </div>
                {/* END : Icon buttons */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Toggle state</h5>
                {/* Toggle state button */}
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-success' data-bs-toggle='button' autoComplete='off'>Toggle button</button>
                  <button type='button' className='btn btn-danger rounded-pill' data-bs-toggle='button' autoComplete='off'>Toggle button</button>
                </div>
                {/* END : Toggle state button */}
              </div>
            </div>
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Disabled buttons</h5>
                {/* Disabled button */}
                <div className='mt-4 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-primary' disabled>Primary</button>
                  <button type='button' className='btn btn-secondary' disabled>Secondary</button>
                  <button type='button' className='btn btn-success' disabled>Success</button>
                  <button type='button' className='btn btn-danger' disabled>Danger</button>
                  <button type='button' className='btn btn-warning' disabled>Warning</button>
                  <button type='button' className='btn btn-info' disabled>Info</button>
                  <button type='button' className='btn btn-light' disabled>Light</button>
                  <button type='button' className='btn btn-dark' disabled>Dark</button>
                </div>
                {/* END : Disabled button */}
                {/* Disabled button for outline button */}
                <div className='mt-2 d-flex flex-wrap justify-content-center gap-2'>
                  <button type='button' className='btn btn-outline-primary' disabled>Primary</button>
                  <button type='button' className='btn btn-outline-secondary' disabled>Secondary</button>
                  <button type='button' className='btn btn-outline-success' disabled>Success</button>
                  <button type='button' className='btn btn-outline-danger' disabled>Danger</button>
                  <button type='button' className='btn btn-outline-warning' disabled>Warning</button>
                  <button type='button' className='btn btn-outline-info' disabled>Info</button>
                  <button type='button' className='btn btn-outline-light' disabled>Light</button>
                  <button type='button' className='btn btn-outline-dark' disabled>Dark</button>
                </div>
                {/* END : Disabled button for outline button */}
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Block buttons</h5>
                {/* Block buttons */}
                <div className='mt-4 d-grid gap-2'>
                  <button className='btn btn-primary' type='button'>Button</button>
                  <button className='btn btn-primary' type='button'>Button</button>
                </div>
                {/* END : Block buttons */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Responsive button block</h5>
                {/* Responsive block buttons */}
                <div className='mt-4 d-grid gap-2 d-md-block'>
                  <button className='btn btn-primary' type='button'>Button</button>
                  <button className='btn btn-primary' type='button'>Button</button>
                </div>
                {/* END : Responsive block buttons */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Centered</h5>
                {/* Centered block buttons */}
                <div className='mt-4 d-grid gap-2 col-8 mx-auto'>
                  <button className='btn btn-primary' type='button'>Button</button>
                  <button className='btn btn-primary' type='button'>Button</button>
                </div>
                {/* END : Centered block buttons */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Alignment</h5>
                {/* Alignments */}
                <div className='mt-4 d-grid gap-2 d-md-flex justify-content-md-end'>
                  <button className='btn btn-primary me-md-2' type='button'>Button</button>
                  <button className='btn btn-primary' type='button'>Button</button>
                </div>
                {/* END : Alignments */}
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Button sizes</h5>
                {/* Button sizes */}
                <div className='mt-4 d-flex flex-column align-items-center gap-2'>
                  <button type='button' className='btn btn-warning btn-lg'>Large button</button>
                  <button type='button' className='btn btn-warning'>Normal button</button>
                  <button type='button' className='btn btn-warning btn-sm'>Small button</button>
                  <button type='button' className='btn btn-warning btn-xs'>Extra Small</button>
                </div>
                {/* END : Button sizes */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Button sizes</h5>
                {/* Button sizes */}
                <div className='mt-4 d-flex flex-column align-items-center gap-2'>
                  <button type='button' className='btn btn-secondary btn-lg rounded-pill'>Large button</button>
                  <button type='button' className='btn btn-secondary rounded-pill'>Normal button</button>
                  <button type='button' className='btn btn-secondary btn-sm rounded-pill'>Small button</button>
                  <button type='button' className='btn btn-secondary btn-xs rounded-pill'>Extra Small</button>
                </div>
                {/* END : Button sizes */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Button sizes</h5>
                {/* Button sizes */}
                <div className='mt-4 d-flex flex-column align-items-center gap-2'>
                  <button type='button' className='btn btn-icon btn-info btn-lg'>
                    <i className='demo-pli-mine fs-2' />
                  </button>
                  <button type='button' className='btn btn-icon btn-info'>
                    <i className='demo-pli-mine fs-3' />
                  </button>
                  <button type='button' className='btn btn-icon btn-info btn-sm'>
                    <i className='demo-pli-mine fs-4' />
                  </button>
                  <button type='button' className='btn btn-icon btn-info btn-xs'>
                    <i className='demo-pli-mine' />
                  </button>
                </div>
                {/* END : Button sizes */}
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-3 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>Button sizes</h5>
                {/* Button sizes */}
                <div className='mt-4 d-flex flex-column align-items-center gap-2'>
                  <button type='button' className='btn btn-icon btn-success btn-lg rounded-circle'>
                    <i className='demo-pli-wallet-2 fs-3' />
                  </button>
                  <button type='button' className='btn btn-icon btn-success rounded-circle'>
                    <i className='demo-pli-wallet-2 fs-4' />
                  </button>
                  <button type='button' className='btn btn-icon btn-success btn-sm rounded-circle'>
                    <i className='demo-pli-wallet-2 fs-5' />
                  </button>
                  <button type='button' className='btn btn-icon btn-success btn-xs rounded-circle'>
                    <i className='demo-pli-wallet-2' />
                  </button>
                </div>
                {/* END : Button sizes */}
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
