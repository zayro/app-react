import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
import { useUsersQuery } from '../api/UserQuery'

import { Paper, Card, Typography, Grid, Avatar, Stack, Divider } from '@mui/material'
import { MdShoppingBag } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { BiComment } from 'react-icons/bi'

import { Loading } from './loading'

import { useQueryClient } from 'react-query'

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

      <Stack direction='row' justifyContent='space-around' alignItems='center' spacing={4} />

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
