const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

export const api = axios.create({
  baseURL:
    timeout: 3000,
  withCredentials: true
})


export const memeapi = axios.create({
  baseURL: "stuff",
  withCredentials: true
})