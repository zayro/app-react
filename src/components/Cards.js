import React, { useEffect, useState } from 'react'

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Divider,
  Button,
  CardHeader,
  IconButton,
  Fade
} from '@mui/material'

import { IoClose } from 'react-icons/io5'

export const Cards = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {}, [])

  return (
    <>
      <Fade in={show} unmountOnExit>
        <Card elevation={5} sx={{ maxWidth: 400, maxHeight: 600 }}>
          <CardHeader
            action={
              <IconButton aria-label='settings' onClick={handleClose}>
                <IoClose />
              </IconButton>
            }
          />
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
              <Divider sx={{ marginTop: '20px' }} />
            </CardContent>
          </CardActionArea>

          <Stack direction='row' justifyContent='center' alignItems='center' spacing={6}>
            <Button color='error'>Cancel</Button>

            <Button color='success'>Success</Button>
          </Stack>
        </Card>
      </Fade>
    </>
  )
}
