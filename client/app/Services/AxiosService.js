const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'




export const memeapi = axios.create({
  baseURL: "stuff",
  withCredentials: true
})