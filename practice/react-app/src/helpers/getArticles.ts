import { ArticleList } from '../types/article'
import { axiosInstance } from './axios'

export const getArticles = async () => {
  const response = await axiosInstance.get<ArticleList>('/articles')
  return response.data.articles
}
