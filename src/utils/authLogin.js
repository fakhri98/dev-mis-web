async function authLogin () {
  //...
  // Make the login API call
  const response = await fetch(`api.pmi.or.id/api/v1/user/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
  //...
  // Extract the JWT from the response
  const { jwt_token } = await response.json()
  //...
  // Do something the token in the login method
  await login({ jwt_token })

};

export default authLogin;