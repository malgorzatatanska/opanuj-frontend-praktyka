import { Authors } from '../types/authors'
import { axiosInstance } from './axios'

export const getAuthors = async () => {
  const response = await axiosInstance.get<Authors>('/authors')
  return response?.data.authors
}
