export default {
  getToken () {
    return localStorage.getItem('user')
  },
  setToken (user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}
