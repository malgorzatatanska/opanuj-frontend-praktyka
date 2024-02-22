interface Props {
  title: string;
  fieldValue: string;
  onChangeValue: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = ({
  title,
  fieldValue,
  onChangeValue,
  options,
}: Props) => {
  return (
    <>
      {title}
      <select
        value={fieldValue}
        onChange={(e) => onChangeValue(e.target.value)}
        className="border h-7 mt-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
