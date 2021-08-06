const store = require('./store')
const config = require('./config')
const { K } = require('handlebars')
// sign up connect to server
const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
// sign in connect to server
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}
// connect to server sign out
const signOut = function () {
  console.log('in sign-out api')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.token }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.token },
    data: data
  })
}

const addAnimal = function (data) {
  return $.ajax({
    url: config.apiUrl + '/animals',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.token },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  addAnimal

}
