// React
import { useCallback, useContext, useState } from 'react'
// Context
import { UserContext } from '../context/UserContext'
import { AuthContext } from '../context/AuthContext'
// Api
import { loginService } from '../api/Auth'
// library
import swal from 'sweetalert'
import jwtDecode from 'jwt-decode'

export default function useAuthHook () {
  const [state, setState] = useState({ loading: false, error: false, auth: false })
  const { info, setInfo } = useContext(UserContext)
  const { getAuth, setAuth } = useContext(AuthContext)

  const login = useCallback(
    ({ datos }) => {
      setState({ loading: true, error: false, auth: false })

      loginService({ datos })
        .then((response) => {
          // window.sessionStorage.setItem('jwt', jwt)
          const userInfo = {}

          const infoDecode = jwtDecode(response.data.token)
          console.log('* ~ file: AuthHook.js ~ line 27 ~ infoDecode', infoDecode.role)

          userInfo.information = infoDecode.information
          userInfo.menu = infoDecode.menu
          userInfo.permissions = infoDecode.permissions

          setState({ loading: false, error: false, auth: true })
          setInfo({ ...info, dataUser: infoDecode })
          setAuth({
            role: infoDecode.role,
            auth: true
          })

          swal({
            title: 'Exitoso!',
            text: 'ingreso exitosamente',
            icon: 'success',
            button: 'cerrar',
            timer: 3000
          })

          document.body.style.backgroundImage = 'none'
        })
        .catch((err) => {
          setState({ loading: false, error: true, auth: false })
          console.error(err)

          swal({
            title: 'Ups ',
            text: 'ocurrió un problema!',
            icon: 'error',
            button: 'cerrar',
            timer: 3000
          })
        })
    },
    [setAuth, setInfo]
  )

  return {
    info,
    getAuth,
    isLogged: state.auth,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login
  }
}
