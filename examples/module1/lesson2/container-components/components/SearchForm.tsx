import { GenderSelect } from './GenderSelect';
import { GenderInput } from './GenerInput';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <label className="flex flex-col">
        <GenderInput title="Name" name={name} setName={setName} />
      </label>
      <label className="flex flex-col">
        <GenderSelect titile="Gender" gender={gender} setGender={setGender} />
      </label>
      <label className="flex flex-col">
        Sort by
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border h-7 mt-1"
        >
          <option value="">Initial</option>
          <option value="name">Name</option>
          <option value="created">Created Date</option>
        </select>
      </label>
    </form>
  );
}

export default SearchForm;
