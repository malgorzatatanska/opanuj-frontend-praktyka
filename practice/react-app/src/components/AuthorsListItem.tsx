import { Author } from '../types/authors'

interface Props {
  author: Author
}

export const AuthorsListItem = ({ author }: Props) => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-3">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 text-blue-600 rounded-full bg-blue-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
            <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
            {author.name}
          </h1>
          <h2 className="text-neutral-400 pt-1">Liczba artukułów: {author.articles}</h2>
        </div>
      </div>
    </div>
  )
}
