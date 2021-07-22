import store from '../store/index'
import router from '../router/index'


/**
 * Obtine el token almacenado
 */
const shutdown = () => {
    localStorage.clear();
    store.commit('userClear')
    store.commit('configClear')
    router.push({
        name: 'login',
    })
}

export {

    shutdown


}
