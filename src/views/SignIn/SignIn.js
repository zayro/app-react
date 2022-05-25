// React
import React, { useEffect, useState } from 'react'

// Route
import { useNavigate } from '@tanstack/react-location'

// Hook
import useAuthHook from '../../hook/AuthHook'

// Components
import { Loading } from '../../components/loading'

import { constant } from '../../i18n/es'

// Css
import './SignIn.css'

const SignIn = () => {
  const { login, isLoginLoading, getAuth } = useAuthHook()

  const [datos, setDatos] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    console.log('********************** ingresando al componente SignIn **********************')

    if (getAuth?.auth) {
      navigate({ to: '/welcome', replace: true })
    }
  }, [getAuth, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()
    login({ datos })
  }
  // capture data to form
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const backGround = 'img/background/y-so-serious-white.png'

  document.body.style.backgroundImage = `url(${backGround})`

  return (
    <div className='container'>
      <div className='container-login'>
        <div className='card-login p-3 mb-5 rounded'>
          <div className='card'>
            <img src='img/profile/avatar/user_256x256.png' alt='...' className='card-img-login' width={150} />
            <div className='card-body'>
              <h3 className='card-title'>Sign In</h3>
              <form>
                <div className='form-group'>
                  <label>Email address</label>
                  <input
                    type='email'
                    id='username'
                    name='username'
                    className='form-control'
                    placeholder='Enter email'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    className='form-control'
                    placeholder='Enter password'
                    onChange={handleInputChange}
                  />
                </div>
                <div className='form-group'>
                  <div className='d-grid gap-2'>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                      {constant.BUTTON.send}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Loading openLoad={isLoginLoading}> </Loading>
    </div>
  )
}

export { SignIn }
