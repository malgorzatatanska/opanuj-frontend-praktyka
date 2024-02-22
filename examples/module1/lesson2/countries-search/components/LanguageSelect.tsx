import React from 'react';

type SortSelectProps = {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
};

const LanguageSelect: React.FC<SortSelectProps> = ({
  sortOption,
  setSortOption,
  options,
}) => {
  return (
    <label className="flex flex-col">
      Choose language
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value=""> All</option>
        {options
          .sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
          })
          .map((lang: string, index: number) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
      </select>
    </label>
  );
};

export default LanguageSelect;
