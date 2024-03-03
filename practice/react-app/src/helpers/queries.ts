import { useQuery } from '@tanstack/react-query'
import { getArticles } from './getArticles'
import { getAuthors } from './getAuthors'

export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles(),
    refetchOnWindowFocus: false,
    staleTime: 10000,
  })
}

export const useAuthors = () => {
  return useQuery({
    queryKey: ['authors'],
    queryFn: () => getAuthors(),
    refetchOnWindowFocus: false,
  })
}
