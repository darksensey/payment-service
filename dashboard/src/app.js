import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Bus.$emit('loader', true);
  console.log('Axios request interceptor')
  if (localStorage.getItem('authToken')) {
    config.headers['Authorization'] = localStorage.getItem('authToken')
  }

  // Do something before request is sent
  return config
}, function (error) {
  // Bus.$emit('loader', false);
  // Do something with request error
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  console.log('Axios response interceptor')
  // Bus.$emit('loader', false);
  return response
}, (error) => {
  // Bus.$emit('loader', false);
  localStorage.removeItem('authToken')

  return Promise.reject(error)
})
