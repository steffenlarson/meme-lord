const base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

// @ts-ignore
export const memeapi = axios.create({
  baseURL: base,
  withCredentials: true
})