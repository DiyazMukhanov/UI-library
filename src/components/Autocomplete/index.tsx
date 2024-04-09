import { useState } from 'react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    setShowDropdown(true);

    if (userInput) {
      const filteredData = options.filter((option) =>
        option.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredOptions(filteredData);
    } else {
      setFilteredOptions([]);
    }
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
