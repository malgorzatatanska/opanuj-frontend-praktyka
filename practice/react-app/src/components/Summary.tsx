import { useArticles } from '../helpers/queries'

export const Summary = () => {
  const articles = useArticles()

  return (
    <div className="flex max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        Liczba artukułów: {articles.data?.length}
      </div>
    </div>
  )
}
