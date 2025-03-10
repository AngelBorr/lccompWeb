const loginForm = document.getElementById('loginForm')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')

loginForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('front-1', emailInput.value)
  console.log('front-2', passwordInput.value)
  const dataUser = new FormData(loginForm)
  const user = {}
  dataUser.forEach((value, key) => (user[key] = value))
  fetch('/api/sessions/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  /* .then((result) => result.json())
    .then((json) => {
      try {
        const result = json.payload
        localStorage.setItem('token', result)
        const token = localStorage.getItem('token')
        console.log('token', token)
        if (token) {
          window.location.replace('/products')
        }
      } catch (error) {
        console.log(error.message)
      }
    }) */
})
