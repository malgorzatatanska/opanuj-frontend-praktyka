import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/data'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(response => {
  return response
})
