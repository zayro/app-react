import Navbar from 'react-bootstrap/Navbar'

import { Container, Offcanvas, Nav } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
// Icon
import { MdMenu, MdKeyboardArrowRight } from 'react-icons/md'
import { RiShutDownLine } from 'react-icons/ri'
// Context
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
// Route
import { Link, useNavigate } from '@tanstack/react-location'
// localstorage
import LocalService from '../services/secureStorage'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MenuNavbar () {
  const storage = new LocalService()
  const { info, setInfo } = useContext(UserContext)
  const { getAuth, setAuth } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const navigate = useNavigate()

  const singOff = () => {
    console.log('**************** SHUTDOWN APP****************')
    setInfo({ ...info, dataUser: {} })
    setAuth({ ...getAuth, auth: false, role: 'default' })
    storage.removeItem('acceso')

    navigate({ to: '/', replace: true })
  }

  const auth = { menu: [{ menu: '', link: '', icon: '' }] }
  let information = {}

  if (getAuth.auth) {
    auth.menu = info.dataUser.menu
    information = info.dataUser?.information[0]
  } else {
    return <></>
  }

  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container fluid>
          <Nav.Link onClick={handleShow} className='d-inline-block  align-top'>
            <span style={{ color: 'white', fontSize: '20px' }}>
              <MdMenu />
            </span>
          </Nav.Link>
          <Navbar.Brand href='#home'>App React</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={singOff} className='d-inline-block align-top'>
                <span>{information.first_name + ' ' + information.last_name}</span>
                <span style={{ color: 'white', fontSize: '20px', padding: '30px' }}>
                  <RiShutDownLine />
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='start'
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                <p className='text-center'> Menu</p>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <ul className='list-group list-group-flush'>
                  {auth.menu.map((item, i) => (
                    <li key={i} className='list-group-item list-group-item-action'>
                      <Link
                        key={i}
                        to={item.link}
                        style={{ color: 'black', textDecoration: 'none' }}
                        onClick={handleClose}
                      >
                        <MdKeyboardArrowRight />
                        {item.menu.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
