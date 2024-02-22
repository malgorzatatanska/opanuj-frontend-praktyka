import { useMemo, useState } from 'react';
import { CountryCard } from '../components/CountryCard';
import LanguageSelect from '../components/LanguageSelect';
import { useSearchCountry } from '../hooks';
import { useGetCountries } from '../hooks/useGetCountries';
import SelectSortBy from '../components/SelectSortBy';

const SearchCountryContainer = () => {
  const [filterLangOption, setFilterLangOption] = useState('');
  const [sortType, setSortType] = useState('');
  const { countries } = useSearchCountry(filterLangOption);

  const { countries: allCountries } = useGetCountries();

  const languages = useMemo(() => {
    return allCountries.reduce<string[]>((total, country) => {
      const langList = Object.values(country.languages);

      langList.map((lang) => {
        if (total.includes(lang)) return total;
        return total.push(lang);
      });

      return total;
    }, []);
  }, [allCountries]);

  const sortedCountries = useMemo(() => {
    if (sortType === 'Alfabetic') {
      return countries.sort((a, b) => {
        if (a.name.official < b.name.official) return -1;
        if (a.name.official > b.name.official) return 1;
        return 0;
      });
    }

    if (sortType === 'Population') {
      return countries.sort((a, b) => {
        if (a.population < b.population) return -1;
        if (a.population > b.population) return 1;
        return 0;
      });
    }

    return countries;
  }, [countries, sortType]);

  return (
    <div>
      <h1 className="mb-10">Countries</h1>
      <form className="space-x-4 flex items-end justify-center">
        <LanguageSelect
          setSortOption={setFilterLangOption}
          sortOption={filterLangOption}
          options={languages}
        />
        <SelectSortBy sortOption={sortType} setSortOption={setSortType} />
      </form>
      <ul>
        {sortedCountries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default SearchCountryContainer;
