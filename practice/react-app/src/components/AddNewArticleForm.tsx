import { SubmitHandler, useForm } from 'react-hook-form'
import { Article } from '../types/article'
import { useCreateArticle } from '../helpers/mutations'

export const AddNewArticleForm = () => {
  const { handleSubmit, register, reset: resetForm } = useForm<Article>()

  const createArticleMutation = useCreateArticle({ reset: resetForm })

  const handleCreateArticle: SubmitHandler<Article> = data => {
    createArticleMutation.mutate(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateArticle)}
      className="flex gap-5 flex-col w-full items-center "
    >
      <input
        id="title"
        {...register('title')}
        type="text"
        placeholder="Title"
        required
        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
      />
      <input
        {...register('content')}
        placeholder="Content"
        required
        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
      />
      <button
        disabled={createArticleMutation.isPending}
        className="flex items-center w-full justify-center px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gray-800 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        type="submit"
      >
        {createArticleMutation.isPending ? (
          <span className="loading loading-spinner loading-lg text-white "></span>
        ) : (
          'Create Article'
        )}
      </button>
    </form>
  )
}
