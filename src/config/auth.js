// auth.js
const TOKEN_KEY = 'my_app_token'

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};


export const removeToken = () => {
  localStorage.removeItem("token");
};
