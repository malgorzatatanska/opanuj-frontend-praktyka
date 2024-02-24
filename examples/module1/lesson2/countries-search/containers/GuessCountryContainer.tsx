import { useState } from 'react';
import { GuessInput } from '../components/GuessInput';
import { useDrawCountry } from '../hooks/useDrawCountry';
import { Button } from '../components/Button';

const GuessCountryContainer = () => {
  const [countryName, setCountryName] = useState('');
  const [triggerReloadCountry, setTriggerReloadCountry] = useState(0);
  const [message, setMessage] = useState('');
  const { country } = useDrawCountry(triggerReloadCountry);

  const handleDrawNewCountry = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTriggerReloadCountry((prev) => prev + 1);
    setMessage('');
  };

  const handleCheckTheAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!countryName) return;
    if (
      countryName.trim().toLowerCase() ===
      country?.name.official.trim().toLowerCase()
    ) {
      setMessage('Gratulacje! Poprawna odpowiedź');
      setCountryName('');
    } else {
      setMessage(
        'Niestety, to nie jest poprawna odpowiedź, Prawidłowa odpowiedź to: ' +
          country?.name.official
      );
      setCountryName('');
    }
  };

  return (
    <div>
      <h1 className="mb-10">Wylosowny kraj</h1>
      {message && <div>{message}</div>}
      <div className="flex items-center gap-20">
        <img src={country?.flags.png} alt={country?.flags.alt} />
        <form className="space-x-4 flex flex-col items-end justify-center">
          <GuessInput name={countryName} setName={setCountryName} />
          <div className="mt-10 flex gap-2">
            <Button
              title="Losuj ponownie"
              onClick={(event) => handleDrawNewCountry(event)}
            />
            <Button
              title="Sprawdź"
              onClick={(event) => handleCheckTheAnswer(event)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuessCountryContainer;
