interface Props {
  title: string;
}

function SearchTitle({ title }: Props) {
  return <h1 className="text-2xl">{title}</h1>;
}

export default SearchTitle;
