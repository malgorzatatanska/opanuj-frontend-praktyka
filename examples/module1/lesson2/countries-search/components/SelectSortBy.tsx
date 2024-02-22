import React from 'react';

type SelectSortByProps = {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
};

const SelectSortBy: React.FC<SelectSortByProps> = ({
  sortOption,
  setSortOption,
}) => {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="Alfabetic"> Alfabetic</option>
        <option value="Population"> Population</option>
      </select>
    </label>
  );
};

export default SelectSortBy;
