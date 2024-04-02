import './App.css';
import DropdownMenu from './components/Dropdown';

function App() {
  const dropDownClickHandler = (value: string) => {
    console.log(value)
  }

  return (
    <div className="App">
      <DropdownMenu>
        <DropdownMenu.Trigger> 
            <button>Menu</button>
        </DropdownMenu.Trigger>
         <DropdownMenu.Content className='dropdownContent'>
          <DropdownMenu.Item value='Курица' onClick={dropDownClickHandler}>
             Курица
          </DropdownMenu.Item>
         </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
}

export default App;
