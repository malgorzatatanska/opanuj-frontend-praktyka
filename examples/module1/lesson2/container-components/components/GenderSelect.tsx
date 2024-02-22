interface Props {
  titile: string;
  gender: string;
  setGender: (value: string) => void;
}

export const GenderSelect = ({ titile, gender, setGender }: Props) => {
  return (
    <>
      {titile}
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Any Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
};
