import { useEffect, useState } from 'react';

type Props = {
  options: any[];
  containerClassName: string;
  inputClassName: string;
  dropdownClassName: string;
  inputPlaceholder: string;
  onChange: (userInput: string) => void;
};

export const Autocomplete = ({
  options,
  inputClassName,
  dropdownClassName,
  containerClassName,
  inputPlaceholder,
  onChange,
}: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const filteredData = options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(inputValue ? filteredData : []);
  }, [inputValue, options]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setShowDropdown(false);
    onChange(value);
  };

  return (
    <div className={containerClassName}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={inputPlaceholder}
        list="autocompleteOptions"
        className={inputClassName}
      />
      {showDropdown && (
        <div className={dropdownClassName}>
          {filteredOptions.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
