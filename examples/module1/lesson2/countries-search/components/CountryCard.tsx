import { Country } from '../types/country';

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  const { name, languages, flags } = country;

  return (
    <div className="mt-10">
      <h2 className="font-bold">{name.official}</h2>
      <div className="flex pt-5">
        <img src={flags.png} alt={flags.alt} />
        <div className="ml-10">
          <h3>Languages:</h3>
          <ul>
            {Object.values(languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
        <div className="ml-10">Population: {country.population}</div>
      </div>
    </div>
  );
};
