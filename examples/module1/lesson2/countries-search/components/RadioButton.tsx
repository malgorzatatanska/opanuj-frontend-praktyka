import { SCREEN_TYPES } from '../helpers/consts';

interface RadioButtonProps {
  title: string;
  isChecked: boolean;
  onchange: (type: SCREEN_TYPES) => void;
  value: SCREEN_TYPES;
}

export const RadioButton = ({
  isChecked,
  title,
  onchange,
  value,
}: RadioButtonProps) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={() => onchange('WYSZUKAJ')}
        className="mr-2"
      />
      {title}
    </label>
  );
};
