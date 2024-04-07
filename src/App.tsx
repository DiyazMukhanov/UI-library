import { useState } from 'react';
import './App.css';
import DropdownMenu from './components/Dropdown';

function App() {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleChange = (value: string) => {
    setSelectedItem(value);
    console.log(value);
  };

  return (
    <div className="App">
      <h2>Выбранный айтем: {selectedItem}</h2>
      <DropdownMenu value={selectedItem} onChange={handleChange}>
        <DropdownMenu.Trigger>
          <button>Menu</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="dropdownContent">
          <DropdownMenu.Item value="Курица">Курица</DropdownMenu.Item>
          <DropdownMenu.Item value="Шашлычок">Шашлычок</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
}

export default App;
