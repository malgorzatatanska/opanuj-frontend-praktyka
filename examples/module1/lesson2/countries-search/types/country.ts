export const getAllCountryListUrl = () =>
  'https://restcountries.com/v3.1/all?fields=name,languages,flags,population';

export const getSearchCountryByLangUrl = (lang: string) =>
  `https://restcountries.com/v3.1/lang/${lang}?fields=name,languages,flags,population`;

type Languages = Record<string, string>;

export interface Country {
  name: {
    official: string;
  };
  languages: Languages;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: number;
}
