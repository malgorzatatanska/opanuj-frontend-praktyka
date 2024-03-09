import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createArticle } from './createArticle'
import { Article } from '../types/article'

interface Props {
  reset: () => void
}

export const useCreateArticle = ({ reset }: Props) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (article: Article) => createArticle(article),
    onMutate: async newArticle => {
      await queryClient.cancelQueries({
        queryKey: ['articles'],
      })
      const previousArticles = queryClient.getQueryData(['articles'])

      queryClient.setQueryData(['articles'], (old: Article[]) => [...old, newArticle])

      return { previousArticles }
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(['articles'], context?.previousArticles)
    },
    onSuccess: () => {
      reset()
    },
    onSettled: (_, error) => {
      if (error) return
      //  in real-live app I would inavalidate the query
      //   queryClient.invalidateQueries({
      //     queryKey: ['articles'],
      //   })
    },
  })
}
