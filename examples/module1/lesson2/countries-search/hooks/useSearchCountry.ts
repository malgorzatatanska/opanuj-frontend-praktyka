import { useEffect, useState } from 'react';
import {
  Country,
  getAllCountryListUrl,
  getSearchCountryByLangUrl,
} from '../types/country';

export const useSearchCountry = (lang: string) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountryList = async () => {
      try {
        const response = await fetch(
          lang ? getSearchCountryByLangUrl(lang) : getAllCountryListUrl()
        );
        const countryList = await response.json();

        setCountries(countryList);
      } catch (error) {
        console.error(error);
      }
    };

    getCountryList();
  }, [lang]);

  return { countries };
};
