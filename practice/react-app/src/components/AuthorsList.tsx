import { AuthorsListItem } from '.'
import { useAuthors } from '../helpers/queries'

export const AuthorsList = () => {
  const { data } = useAuthors()
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
            {data?.map(author => (
              <AuthorsListItem key={author.id} author={author} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
