import router from './index'
import _auth from './../services/auth.service'

router.beforeEach((to, from, next) => {
  const user = _auth.getToken()
  if (!user && to.path !== '/auth/login' && to.path !== '/auth/signup') {
    next({path: '/auth/login'})
  } else {
    next()
  }
})
