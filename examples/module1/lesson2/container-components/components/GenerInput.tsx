interface Props {
  title: string;
  setName: (name: string) => void;
  name: string;
}

export const GenderInput = ({ title, setName, name }: Props) => {
  return (
    <>
      {title}
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
