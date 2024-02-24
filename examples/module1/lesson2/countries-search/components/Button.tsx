interface Props {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ title, onClick }: Props) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-black text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
