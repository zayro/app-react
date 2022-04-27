import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
import { useUsersQuery } from '../api/UserQuery'

import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Stack,
  Divider,
  Container as Contenedor
} from '@mui/material'
import { MdShoppingBag } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { BiComment } from 'react-icons/bi'
import { HiOutlineMail, HiOutlinePhoneMissedCall } from 'react-icons/hi'
import {
  IoPersonAddOutline,
  IoSettingsOutline,
  IoMailOutline,
  IoLogoWhatsapp,
  IoLocationOutline,
  IoInformationCircleOutline,
  IoEllipsisVerticalSharp,
  IoClose
} from 'react-icons/io5'

import { Loading } from './loading'

import { ListGroup } from 'react-bootstrap'

import { useQueryClient } from 'react-query'

// React-Bootstrap
import Container from 'react-bootstrap/Container'

import { Cards } from './Cards'

import './cards.scss'
import '../style/global.css'

function Welcome () {
  const { info } = useContext(UserContext)
  console.log('* ~ info', info)
  const { getAuth } = useContext(AuthContext)
  console.log('* ~ getAuth', getAuth)

  const queryClient = useQueryClient()
  console.log('----------------------------------- queryClient', queryClient.getQueriesData('users'))

  const query = useUsersQuery()

  console.log('* ~ file: welcome.js ~ line 18 ~ value', query?.data?.data)

  useEffect(() => {}, [])

  if (query.isError) {
    return <div> Error Cargando la Lista</div>
  }

  if (query.isLoading) {
    return <Loading openLoad />
  }

  return (
    <div className='container-fluid mt-5 pt-5 fondo'>
      <Paper elevation={5} sx={{ padding: '20px' }} />
      <hr />
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item md>
          <Card elevation={6} sx={{ maxWidth: 320, maxHeight: 120 }}>
            <Stack
              direction='row'
              justifyContent='space-around'
              alignItems='center'
              spacing={4}
              sx={{ padding: '19px' }}
            >
              <Avatar sx={{ bgcolor: 'blue', width: 60, height: 60 }}>
                <MdShoppingBag style={{ color: 'white', width: 30, height: 30 }} />
              </Avatar>
              <Typography gutterBottom variant='h4' component='div'>
                321
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread
                </Typography>
              </Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid item md>
          <Card elevation={5} sx={{ maxWidth: 320, maxHeight: 120 }}>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              divider={<Divider orientation='vertical' flexItem sx={{ color: 'green' }} />}
              spacing={2}
            >
              <Avatar variant='square' sx={{ bgcolor: 'red', width: 100, height: 100 }}>
                <BiComment style={{ color: 'white', width: 30, height: 30 }} />
              </Avatar>

              <Typography gutterBottom variant='h4' component='div' sx={{ padding: '10px' }}>
                241
                <Typography variant='body2' color='text.secondary'>
                  Comments
                </Typography>
              </Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid item md>
          <Card elevation={5} sx={{ maxWidth: 320, maxHeight: 120, bgcolor: 'green' }}>
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              divider={<Divider orientation='vertical' flexItem sx={{ color: 'green' }} />}
              spacing={2}
            >
              <Avatar variant='square' sx={{ bgcolor: 'green', width: 100, height: 100 }}>
                <FaRegUser style={{ color: 'white', width: 40, height: 40 }} />
              </Avatar>
              <Typography gutterBottom variant='h4' component='div' sx={{ padding: '10px', color: 'white' }}>
                241
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
      <hr />

      <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={4}>
        <Card elevation={5} sx={{ maxWidth: 400, maxHeight: 600 }}>
          <CardActionArea>
            <CardContent>
              <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
                <Avatar
                  alt='Remy Sharp'
                  sx={{ bgcolor: 'grey', width: 120, height: 120, border: '3px solid white' }}
                  src={process.env.PUBLIC_URL + '/img/profile/avatar/747369_man_512x512.png'}
                />
                <Typography gutterBottom variant='h5' component='div'>
                  Donald Brown
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles
                </Typography>
              </Stack>
              <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />

              <Stack direction='row' justifyContent='center' alignItems='center' spacing={6}>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
                  <Typography gutterBottom variant='h5' component='div'>
                    1020
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Post
                  </Typography>
                </Stack>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
                  <Typography gutterBottom variant='h5' component='div'>
                    23K
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Followers
                  </Typography>
                </Stack>
                <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
                  <Typography gutterBottom variant='h5' component='div'>
                    278
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Followings
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>

        <Cards />

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
          <Container style={{ padding: '30px', maxWidth: 500, minWidth: 400, maxHeight: 600 }}>
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
          <ol className='list-group list-group-borderless mt-4'>
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

        <Card elevation={5} sx={{ maxWidth: 400, maxHeight: 600 }}>
          <Contenedor
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

            <Stack direction='row' justifyContent='center' alignItems='center' spacing={5} sx={{ paddingTop: '40px' }}>
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
          </Contenedor>
        </Card>
      </Stack>

      <div className='row mt-5'>
        <div className='col-12 col-xl-5'>
          <div className='row'>
            <div className='col-md-6'>
              {/* Stat widget */}
              <div className='card mb-3 mb-xl-3'>
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
                      <h5 className='h2 mb-0'>241</h5>
                      <p className='mb-0'>Registered User</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* END : Stat widget */}
              {/* Stat widget */}
              <div className='card mb-3 mb-xl-3'>
                <div className='d-flex align-items-stretch'>
                  <div className='d-flex align-items-center justify-content-center flex-shrink-0 bg-danger px-4 text-white rounded-start'>
                    <BiComment style={{ color: 'white', width: '3rem', height: '3rem' }} />
                  </div>
                  <div className='flex-grow-1 py-3 ms-3'>
                    <h5 className='h2 mb-0 text-danger'>379</h5>
                    <p className='mb-0'>Comments</p>
                  </div>
                </div>
              </div>
              {/* END : Stat widget */}
              {/* Stat widget */}
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
              {/* END : Stat widget */}
            </div>

            <div className='col-md-6'>
              {/* Stat widget */}
              <div className='card bg-secondary text-white mb-3 mb-xl-3'>
                <div className='card-body py-3'>
                  <div className='d-flex align-items-center mb-3'>
                    <div className='flex-shrink-0'>
                      <MdShoppingBag style={{ color: 'white', width: '4rem', height: '4rem' }} />
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
              {/* END : Stat widget */}
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
        </div>

        <div className='col-sm-6 col-xl-2'>
          {/* Stat widget */}
          <div className='card bg-danger text-white text-center'>
            <div className='p-3 text-center'>
              <i className='demo-psi-speech-bubble-3 text-white text-opacity-50 display-3 my-4' />
              <div className='display-4'>83</div>
              <p>Comments</p>
              <small className='lh-1'>74 Unapproved Comments</small>
            </div>
          </div>
          {/* END : Stat widget */}
        </div>

        <div className='col-sm-6 col-xl-2'>
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
                  <button className='btn btn-sm btn-icon  shadow-none' data-bs-toggle='dropdown' aria-expanded='false'>
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

        <div className='col-12 col-xl-3'>
          <div className='row g-xl-1'>
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
        </div>
      </div>

      <hr />

      <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={4}>
        <Paper
          elevation={5}
          sx={{ width: 200, height: 200, bgcolor: '#25476A', textAlign: 'center', paddingTop: '20px', color: 'white' }}
        >
          <Typography variant='h2' component='div'>
            50
          </Typography>
          <Typography gutterBottom variant='body' component='div'>
            SALES
          </Typography>
          <MdShoppingBag style={{ color: 'white', width: 25, height: 25 }} />
        </Paper>
        <Paper
          elevation={5}
          sx={{ width: 200, height: 200, bgcolor: '#FA9F1B', textAlign: 'center', paddingTop: '20px', color: 'white' }}
        >
          <Typography variant='h2' component='div'>
            25
          </Typography>
          <Typography gutterBottom variant='body' component='div'>
            CODE
          </Typography>
          <MdShoppingBag style={{ color: 'white', width: 25, height: 25 }} />
        </Paper>
      </Stack>
    </div>
  )
}

export default Welcome
