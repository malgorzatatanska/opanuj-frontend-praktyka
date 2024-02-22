import { useEffect, useState } from 'react';
import { Country, getAllCountryListUrl } from '../types/country';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountryList = async () => {
      try {
        const response = await fetch(getAllCountryListUrl());
        const countryList = await response.json();

        setCountries(countryList);
      } catch (error) {
        console.error(error);
      }
    };

    getCountryList();
  }, []);

  return { countries };
};
