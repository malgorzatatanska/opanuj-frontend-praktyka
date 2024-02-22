import { Character } from '../types/Character';

type sortOptions = 'name' | 'created';

export const sortCharacters = (
  characters: Character[],
  sortOption: sortOptions
) => {
  characters.sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });
};
