import { useEffect, useState } from 'react';
import { Country, getAllCountryListUrl } from '../types/country';

export const useDrawCountry = (triggerReloadCountry: number) => {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const getCountryList = async () => {
      try {
        const response = await fetch(getAllCountryListUrl());
        const countryList: Country[] = await response.json();

        setCountry(countryList[Math.floor(Math.random() * countryList.length)]);
      } catch (error) {
        console.error(error);
      }
    };

    getCountryList();
  }, [triggerReloadCountry]);

  return { country };
};
