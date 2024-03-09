import { useForm, SubmitHandler } from 'react-hook-form';
import { Book } from '../shared/types';

type Inputs = {
  title: string;
  author: string;
};

interface FormProps {
  onAddNewBook: (data: Book) => void;
}

export const Form = ({ onAddNewBook }: FormProps) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const book: Book = {
      id: Math.random().toString(36),
      title: data.title,
      author: data.author,
      publishDate: new Date(),
    };
    onAddNewBook(book);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-5 flex-col w-full items-center "
    >
      <div className="flex flex-col gap-3 max-w-2xl">
        <input
          id="title"
          {...register('title')}
          type="text"
          placeholder="Title"
          required
          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
        />
        <input
          {...register('author')}
          placeholder="Author"
          required
          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
        />

        <button
          className="flex items-center w-full justify-center px-3 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-gray-800 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          type="submit"
        >
          Dodaj
        </button>
      </div>
    </form>
  );
};
