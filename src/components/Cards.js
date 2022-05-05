import React, { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Divider,
  Button,
  CardHeader,
  IconButton,
  Fade,
  Container
} from '@mui/material'

import { ListGroup } from 'react-bootstrap'

import {
  IoClose,
  IoPersonAddOutline,
  IoSettingsOutline,
  IoMailOutline,
  IoLogoWhatsapp,
  IoInformationCircleOutline,
  IoEllipsisVerticalSharp
} from 'react-icons/io5'

import { HiOutlineMail, HiOutlinePhoneMissedCall } from 'react-icons/hi'

export const Cards = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className='container-fluid mt-5 pt-5 fondo'>
        <div className='row mb-5'>
          <div className='col-md-3 mb-3'>
            <Fade in={show} unmountOnExit>
              <Card elevation={5} sx={{ maxWidth: 600, maxHeight: 600 }}>
                <CardHeader
                  action={
                    <IconButton aria-label='settings' onClick={handleClose}>
                      <IoClose />
                    </IconButton>
                  }
                />

                <CardContent>
                  <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
                    <Avatar
                      alt='Remy Sharp'
                      sx={{ bgcolor: 'grey', width: 120, height: 120, border: '3px solid white' }}
                      src={process.env.PUBLIC_URL + '/img/profile/avatar/747397_people_512x512.png'}
                    />
                    <Typography gutterBottom variant='h5' component='div'>
                      Donald Brown
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Lizards are a widespread group of squamate reptiles
                    </Typography>
                  </Stack>
                  <Divider sx={{ marginTop: '20px' }} />
                </CardContent>

                <Stack direction='row' justifyContent='center' alignItems='center' spacing={6}>
                  <Button color='error'>Cancel</Button>

                  <Button color='success'>Success</Button>
                </Stack>
              </Card>
            </Fade>
          </div>

          <div className='col-md-3 mb-3'>
            <div className='card mb-3 bg-white shadow bg-body rounded'>
              <div className='position-relative py-5 px-3 text-center bg-primary text-white rounded-top'>
                <a href='#' className='h5 stretched-link btn-link'>
                  Ralph West
                </a>
                <p className='text-white text-opacity-75 mb-4'>General Manager</p>
              </div>
              <div className='position-relative p-4'>
                <div className='position-absolute top-0 start-50 translate-middle text-white'>
                  <img
                    className='img-lg rounded-circle border border-white border-4'
                    src={process.env.PUBLIC_URL + '/img/profile/avatar/868320_people_512x512.png'}
                    alt='task-user'
                    style={{ width: '6rem', height: '6rem' }}
                  />
                </div>
              </div>
              <Container style={{ paddingBottom: '10px', maxWidth: 500, minWidth: 400, maxHeight: 600 }}>
                <ListGroup variant='flush'>
                  <ListGroup.Item action>
                    <IoPersonAddOutline /> User Detail
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <IoSettingsOutline /> Settings
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <IoMailOutline /> Email
                  </ListGroup.Item>
                  <ListGroup.Item action>
                    <IoLogoWhatsapp /> Whatsapp
                  </ListGroup.Item>
                </ListGroup>
              </Container>
            </div>
          </div>

          <div className='col-md-3 mb-3'>
            <div className='card mb-3 bg-white shadow bg-body rounded'>
              <div className='position-relative py-5 px-3 text-center bg-primary text-white rounded-top'>
                <a href='#' className='h5 stretched-link btn-link'>
                  Ralph West
                </a>
                <p className='text-white text-opacity-75 mb-4'>General Manager</p>
              </div>
              <div className='position-relative p-4'>
                <div className='position-absolute top-0 start-50 translate-middle text-white'>
                  <img
                    className='img-lg rounded-circle border border-white border-4'
                    src={process.env.PUBLIC_URL + '/img/profile/avatar/868320_people_512x512.png'}
                    alt='task-user'
                    style={{ width: '6rem', height: '6rem' }}
                  />
                </div>
              </div>
              <ol
                className='list-group list-group-borderless mt-4'
                style={{ paddingBottom: '10px', maxWidth: 500, minWidth: 400, maxHeight: 600 }}
              >
                <li className='list-group-item d-flex justify-content-between align-items-start'>
                  <div className='me-auto'>
                    <div className='h6 text-head mb-1'>Project completed</div>
                    <small>Lorem ipsum dolor sit.</small>
                  </div>
                  <span className='badge bg-warning rounded-pill'>14</span>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-start'>
                  <div className='me-auto'>
                    <div className='h6 text-head mb-1'>Resource usage</div>
                    <small>Lorem ipsum dolor sit.</small>
                  </div>
                  <span className='badge bg-info rounded-pill'>25%</span>
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-start'>
                  <div className='me-auto'>
                    <div className='h6 text-head mb-1'>Earning</div>
                    <small>Lorem ipsum dolor sit.</small>
                  </div>
                  <span className='badge bg-success rounded-pill'>$ 4,900</span>
                </li>
              </ol>
            </div>
          </div>

          <div className='col-md-3 mb-3'>
            <Card elevation={5} sx={{ maxWidth: 600, maxHeight: 600 }}>
              <Container
                style={{
                  backgroundColor: '#03A9F4',
                  height: 250,
                  padding: '20px'
                }}
              >
                <Stack direction='row' justifyContent='space-betwen' alignItems='center' spacing={2}>
                  <Avatar
                    alt='Remy Sharp'
                    sx={{
                      width: 90,
                      height: 90
                    }}
                    src={process.env.PUBLIC_URL + '/img/profile/avatar/822726_user_512x512.png'}
                  />
                  <Typography gutterBottom variant='h5' component='div' sx={{ color: 'white' }}>
                    Michael Brown
                  </Typography>
                </Stack>

                <Stack
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  spacing={5}
                  sx={{ paddingTop: '40px' }}
                >
                  <Stack direction='column' justifyContent='center' alignItems='center' spacing={0.5}>
                    <HiOutlineMail style={{ color: 'white', width: 30, height: 30 }} />
                    <Typography gutterBottom variant='subtitle2' component='div' sx={{ color: 'white' }}>
                      Email
                    </Typography>
                  </Stack>

                  <Stack direction='column' justifyContent='center' alignItems='center' spacing={0.5}>
                    <HiOutlinePhoneMissedCall style={{ color: 'white', width: 30, height: 30 }} />
                    <Typography gutterBottom variant='subtitle2' component='div' sx={{ color: 'white' }}>
                      Call
                    </Typography>
                  </Stack>
                </Stack>
              </Container>
            </Card>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-sm-6 col-xl-2'>
            <div className='card bg-secondary text-white mb-3'>
              <div className='card-body'>
                {/* Profile picture and short information */}
                <div className='d-flex align-items-center position-relative py-3'>
                  <div className='flex-shrink-0'>
                    <img
                      className='img-md rounded-circle'
                      src={process.env.PUBLIC_URL + '/img/profile/avatar/747390_man_512x512.png'}
                      alt='Profile Picture'
                      loading='lazy'
                      width='40px'
                    />
                  </div>
                  <div className='flex-grow-1 ms-3'>
                    <a href='#' className='h5 stretched-link btn-link'>
                      Karen Murray
                    </a>
                    <p className='m-0'>Sales Manager</p>
                  </div>
                </div>
                <small className='d-none'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, ipsa?</small>
                {/* END : Profile picture and short information */}
                {/* Options buttons */}
                <div className='pt-3 text-center'>
                  <div className='d-flex justify-content-center gap-3'>
                    <HiOutlinePhoneMissedCall
                      className='d-block fs-3 mb-2'
                      style={{ color: 'white', width: 20, height: 20 }}
                    />

                    <HiOutlineMail className='d-block fs-3 mb-2' style={{ color: 'white', width: 20, height: 20 }} />

                    <IoInformationCircleOutline
                      className='d-block fs-3 mb-2'
                      style={{ color: 'white', width: 20, height: 20 }}
                    />
                  </div>
                </div>
                {/* END : Options buttons */}
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 col-xl-3 mb-3'>
            <div className='card'>
              <div className='card-body pt-2'>
                {/* Favorite button and option dropdown */}
                <div className='d-flex justify-content-end gap-1'>
                  <button
                    type='button'
                    className='btn btn-sm btn-icon btn-hover btn-white shadow-none text-orange add-tooltip'
                    data-bs-original-title='Remove from Favorites'
                  />
                  <div className='dropdown'>
                    <button
                      className='btn btn-sm btn-icon  shadow-none'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <IoEllipsisVerticalSharp className='fs-5' />
                      <span className='visually-hidden'>Toggle Dropdown</span>
                    </button>
                    <ul className='dropdown-menu dropdown-menu-end' style={{}}>
                      <li>
                        <a href='#' className='dropdown-item'>
                          <IoClose className=' fs-5 me-2' />
                          Edit
                        </a>
                      </li>
                      <li>
                        <a href='#' className='dropdown-item text-danger'>
                          <i className='demo-pli-recycling fs-5 me-2' /> Remove
                        </a>
                      </li>

                      <li>
                        <a href='#' className='dropdown-item'>
                          <i className='demo-pli-lock-user fs-5 me-2' /> Lock
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* END : Favorite button and option dropdown */}
                {/* Profile picture and short information */}
                <div className='text-center position-relative'>
                  <div className='pb-3'>
                    <img
                      className='img-lg rounded-circle'
                      src={process.env.PUBLIC_URL + '/img/profile/avatar/4_user_people.png'}
                      alt='Profile Picture'
                      loading='lazy'
                    />
                  </div>
                  <a href='#' className='h5'>
                    Stephen Tran
                  </a>
                  <p className='text-muted'>Marketing manager</p>
                </div>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                {/* END : Social media buttons */}
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4 col-xl-3 mb-3'>
            <div className='card mb-3'>
              <div className='card-body'>
                {/* Profile picture and short information */}
                <div className='text-center position-relative'>
                  <div className='pt-2 pb-3'>
                    <img
                      className='img-lg rounded-circle'
                      src={process.env.PUBLIC_URL + '/img/profile/avatar/3_user_people.png'}
                      alt='Profile Picture'
                      loading='lazy'
                    />
                  </div>
                  <a href='#' className='h5 stretched-link btn-link'>
                    Aaron Chavez
                  </a>
                  <p className='text-muted'>CEO</p>
                  <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, ipsa?</small>
                </div>
                {/* END : Profile picture and short information */}
                {/* Social media buttons */}
                <div className='mt-4 pt-3 d-flex justify-content-around border-top'>
                  <div className='text-center'>
                    <h4 className='mb-1'>1,345</h4>
                    <small className='text-muted'>Following</small>
                  </div>
                  <div className='text-center'>
                    <h4 className='mb-1'>23k</h4>
                    <small className='text-muted'>Followers</small>
                  </div>
                  <div className='text-center'>
                    <h4 className='mb-1'>278</h4>
                    <small className='text-muted'>Posts</small>
                  </div>
                </div>
                {/* END : Social media buttons */}
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-xl-4'>
            {/* User widget */}
            <div className='card bg-info text-white mb-3'>
              <div className='card-body'>
                {/* Profile picture and short information */}
                <div className='d-flex align-items-center position-relative py-3'>
                  <div className='flex-shrink-0'>
                    <img
                      className='img-md rounded-circle'
                      src={process.env.PUBLIC_URL + '/img/profile/avatar/747397_people_512x512.png'}
                      alt='Profile Picture'
                      loading='lazy'
                      width='80px'
                    />
                  </div>
                  <div className='flex-grow-1 ms-3'>
                    <a href='#' className='h5 stretched-link btn-link'>
                      Lisa May
                    </a>
                    <p className='m-0'>Sales Manager</p>
                  </div>
                </div>
                <small className='d-none'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, ipsa?</small>
                {/* END : Profile picture and short information */}
                {/* Options buttons */}
                <div className='pt-3 text-center'>
                  <div className='d-flex justify-content-center gap-3'>
                    <HiOutlinePhoneMissedCall className='d-block fs-3 mb-2' style={{ color: 'white' }} />

                    <HiOutlineMail className='d-block fs-3 mb-2' style={{ color: 'white' }} />

                    <IoInformationCircleOutline className='d-block fs-3 mb-2' style={{ color: 'white' }} />
                  </div>
                </div>
                {/* END : Options buttons */}
              </div>
            </div>
            {/* END : User widget */}
            {/* User widget */}
            <div className='card mb-3'>
              <div className='card-body'>
                {/* Profile picture and short information */}
                <div className='text-center position-relative'>
                  <div className='pt-2 pb-3'>
                    <img
                      className='img-lg rounded-circle'
                      src={process.env.PUBLIC_URL + '/img/profile/avatar/747397_people_512x512.png'}
                      alt='Profile Picture'
                      loading='lazy'
                      width='80px'
                    />
                  </div>
                  <a href='#' className='h5 stretched-link btn-link'>
                    Donald Brown
                  </a>
                  <p className='text-muted'>Web and Graphic designer</p>
                </div>
                <div className='d-flex justify-content-center gap-2'>
                  <button type='button' className='btn btn-light'>
                    Send Mail
                  </button>
                  <button type='button' className='btn btn-primary'>
                    Follow
                  </button>
                </div>
                {/* END : Profile picture and short information */}
                {/* Social media buttons */}
                <div className='mt-4 pt-3 d-flex justify-content-around border-top'>
                  <div className='text-center'>
                    <h4 className='mb-1'>1,345</h4>
                    <small className='text-muted'>Following</small>
                  </div>
                  <div className='text-center'>
                    <h4 className='mb-1'>23k</h4>
                    <small className='text-muted'>Followers</small>
                  </div>
                  <div className='text-center'>
                    <h4 className='mb-1'>278</h4>
                    <small className='text-muted'>Posts</small>
                  </div>
                </div>
                {/* END : Social media buttons */}
              </div>
            </div>
            {/* END : User widget */}
          </div>
        </div>
      </div>
    </>
  )
}
