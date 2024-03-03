import { AddNewArticleForm, ArticleListItem } from '.'
import { useArticles } from '../helpers/queries'

export const ArticleList = () => {
  const { data, isLoading } = useArticles()

  if (isLoading) {
    return (
      <section className="flex max-w-screen-2xl mx-auto ">
        <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          ...Loading
        </div>
      </section>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-1/2 justify-center items-center mx-auto">
        <AddNewArticleForm />
      </div>
      <section className="flex max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {data?.map(article => (
            <ArticleListItem key={article.author} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
