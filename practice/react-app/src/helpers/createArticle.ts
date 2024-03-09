import { Article } from '../types/article'
import { axiosInstance } from './axios'

export const createArticle = async (article: Article) => {
  await axiosInstance.post<Article>('/articles?timeout=5000', article)
}
