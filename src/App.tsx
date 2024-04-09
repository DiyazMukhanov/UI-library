import { memo, useState } from 'react';
import './App.css';
import DropdownMenu from './components/Dropdown';

function App() {
  const [selectedItem, setSelectedItem] = useState<string>('');
  // const [counter, setCounter] = useState(0);

  const handleChange = (value: string) => {
    setSelectedItem(value);
    console.log(value);
  };

  return (
    <div className="App">
      {/* <h1>{counter}</h1> */}
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
      {/* <button onClick={() => setCounter(counter + 1)}>+ count</button> */}
      {/* <Child arr={[1, 2, 3]} /> */}
    </div>
  );
}

// type Props = {
//   arr: number[];
// };

// const Child = memo(
//   function Child({ arr }: Props) {
//     console.log('Child render', arr);
//     return <div>Child</div>;
//   },
//   (oldProps, newProps) => {
//     return true;
//   }
// );

export default App;
