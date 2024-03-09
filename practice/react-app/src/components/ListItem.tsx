import { Book } from '../shared/types';

interface ListItemProps {
  book: Book;
  deleteBook: (book: Book) => void;
}

export const ListItem = ({ book, deleteBook }: ListItemProps) => {
  return (
    <li className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
      <div className="flex justify-between items-center">
        <div>
          <p>{book.title}</p>
          <p className="text-sm tracking-normal">{book.author}</p>
        </div>
        <button
          className="text-base cursor-pointer"
          onClick={() => deleteBook(book)}
          data-testid="delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
