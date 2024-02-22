interface Props {
  setName: (name: string) => void;
  name: string;
}

export const GuessInput = ({ setName, name }: Props) => {
  return (
    <>
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Wpisz nazwę kraju"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
