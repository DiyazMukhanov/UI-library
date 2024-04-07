import { createPortal } from 'react-dom';
import './Dropdown.css';
import { useContext, useState, createContext } from 'react';

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  position: Position | null;
  setPosition: (position: Position) => void;
  value: string | null;
  setValue: (value: string) => void;
}

interface Position {
  top: number;
  left: number;
}

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  setIsOpen: (state: boolean) => {},
  position: null,
  setPosition: () => {},
  value: null,
  setValue: (value: string) => {},
});

type DrowdownProps = {
  children: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
};

const DropdownMenu = ({ children, value, onChange }: DrowdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);

  const setValue = (newValue: string) => {
    onChange(newValue);
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        position,
        setPosition,
        value,
        setValue,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

type TriggerAndContentProps = {
  children?: React.ReactNode;
  className?: string;
};

const Trigger = ({ children, className }: TriggerAndContentProps) => {
  const { isOpen, setIsOpen, setPosition } =
    useContext<DropdownContextType>(DropdownContext);

  const onTriggerClickHandler = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);

    const triggerElement = e.currentTarget as HTMLElement;

    const { top, left } = triggerElement.getBoundingClientRect();

    setPosition({
      top,
      left,
    });
  };

  return (
    <div onClick={onTriggerClickHandler} className={className}>
      {children}
    </div>
  );
};

const Content = ({ children, className }: TriggerAndContentProps) => {
  const { isOpen, position } = useContext<DropdownContextType>(DropdownContext);

  if (!isOpen || !position) {
    return null;
  }

  return createPortal(
    <div
      className={className}
      style={{
        position: 'absolute',
        top: position?.top + 40,
        left: position?.left,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

type ItemProps = {
  children: React.ReactNode;
  value: string;
  className?: string;
};

const Item = ({ children, value, className }: ItemProps) => {
  const { setValue } = useContext<DropdownContextType>(DropdownContext);
  const onClickHandler = () => {
    setValue(value);
  };

  return (
    <div onClick={onClickHandler} className={className}>
      {children}
    </div>
  );
};

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Item = Item;

export default DropdownMenu;
