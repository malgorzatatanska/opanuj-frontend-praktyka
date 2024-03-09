import { useState } from 'react';
import './App.css';
import { Book } from './shared/types';
import { ListItem } from './components/ListItem';
import { Form } from './components/Form';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const handleAddNewBook = (book: Book) => {
    setBooks([book, ...books]);
  };

  const handleRemoveBook = (book: Book) => {
    setBooks(books.filter((b) => b.id !== book.id));
  };
  return (
    <div className="flex flex-col max-w-5xl mx-auto ">
      <h1 className="text-2xl font-semibold leading-none tracking-tighter pl-10 bg-zinc-900 mt-20 pt-10 pb-10 text-white">
        Books
      </h1>
      <div className="mt-10 mb-10">
        <Form onAddNewBook={handleAddNewBook} />
      </div>
      <ul className="mt-20 pl-10">
        {books.map((book) => (
          <ListItem book={book} key={book.id} deleteBook={handleRemoveBook} />
        ))}
      </ul>
    </div>
  );
}

export default App;
