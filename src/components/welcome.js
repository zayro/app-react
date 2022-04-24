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
  Button,
  Container as Contenedor
} from '@mui/material'
import { MdShoppingBag } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { BiComment } from 'react-icons/bi'
import { HiOutlineMail, HiOutlinePhoneMissedCall } from 'react-icons/hi'

import { useQueryClient } from 'react-query'

// React-Bootstrap
import Container from 'react-bootstrap/Container'

function Welcome () {
  const { info } = useContext(UserContext)
  console.log('* ~ info', info)
  const { getAuth } = useContext(AuthContext)
  console.log('* ~ getAuth', getAuth)

  const queryClient = useQueryClient()
  console.log('----------------------------------- queryClient', queryClient.getQueriesData('users'))

  const query = useUsersQuery()

  console.log('* ~ file: welcome.js ~ line 18 ~ value', query.data.data)

  useEffect(() => {}, [])

  if (query.isError) {
    return <div> Error Cargando la Lista</div>
  }

  if (query.isLoading) {
    return <div>Cargando datos</div>
  }

  // useEffect(() => {}, [])

  return (
    <Container fluid>
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

      <Grid justifyContent='space-between' alignItems='center' container direction='row'>
        <Grid item md>
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
        </Grid>

        <Grid item md>
          <Card elevation={5} sx={{ maxWidth: 400, maxHeight: 600 }}>
            <CardActionArea>
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
                <Divider sx={{ marginTop: '20px', marginBottom: '20px' }} />
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={6}>
                  <Button variant='contained' color='error'>
                    Cancel
                  </Button>

                  <Button variant='contained' color='success'>
                    Success
                  </Button>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md>
          <Card elevation={5} sx={{ maxWidth: 400, maxHeight: 600 }}>
            <Contenedor style={{ backgroundColor: '#03A9F4', height: 150, padding: '20px' }}>
              <Stack direction='column' justifyContent='center' alignItems='center' spacing={2}>
                <Typography gutterBottom variant='h5' component='div'>
                  Donald Brown
                </Typography>
              </Stack>
            </Contenedor>

            <Avatar
              alt='Remy Sharp'
              sx={{
                width: 120,
                height: 120,
                border: '3px solid white',
                marginTop: '-55px',
                marginLeft: '140px',
                marginBottom: '20px'
              }}
              src={process.env.PUBLIC_URL + '/img/profile/avatar/868320_people_512x512.png'}
            />

            <Container style={{ height: 100 }}>
              <Typography variant='body2' color='text.secondary'>
                Developer.
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Developer.
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Developer.
              </Typography>
            </Container>
          </Card>
        </Grid>

        <Grid item md>
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
            </Contenedor>
          </Card>
        </Grid>
      </Grid>

      <hr />

      <Stack direction='row' justifyContent='center' alignItems='center' spacing={4}>
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
    </Container>
  )
}

export default Welcome
