import { useState } from 'react';
import SearchCountryContainer from '../containers/SearchCountryContainer';
import GuessCountryContainer from '../containers/GuessCountryContainer';
import { RadioButton } from '../components/RadioButton';
import { SCREEN_TYPES } from '../helpers/consts';

const Root = () => {
  const [screen, setScreen] = useState<SCREEN_TYPES>('WYSZUKAJ');

  return (
    <div className="mt-10">
      <form className="space-x-4 flex items-end justify-center mb-10">
        <RadioButton
          isChecked={screen === 'WYSZUKAJ'}
          onchange={() => setScreen('WYSZUKAJ')}
          title="Wyszukaj"
          value="WYSZUKAJ"
        />
        <RadioButton
          isChecked={screen === 'LOSUJ'}
          onchange={() => setScreen('LOSUJ')}
          title="Losuj"
          value="LOSUJ"
        />
      </form>
      {screen === 'WYSZUKAJ' ? (
        <SearchCountryContainer />
      ) : (
        <GuessCountryContainer />
      )}
    </div>
  );
};

export default Root;
