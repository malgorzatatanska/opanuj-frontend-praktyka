import { Article } from '../types/article'

interface Props {
  article: Article
}

export const ArticleListItem = ({ article }: Props) => {
  return (
    <div
      key={article.id}
      className="flex w-full flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          className="w-10 h-10"
          viewBox="0 0 24 24"
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
      <div className="flex-grow w-full mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
        <h2>{article.title}</h2>
        <p>{article.content.slice(0, 100)}...</p>
      </div>
    </div>
  )
}
