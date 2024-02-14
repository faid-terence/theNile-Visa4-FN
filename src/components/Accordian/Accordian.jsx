import React, { createContext, useContext, useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const AccordianContext = createContext();

export const Accordian = ({ children, value, onChange, ...props }) => {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};

export const AccordianItem = ({ children, value, trigger, ...props }) => {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  return (
    <li className="border-b" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <AiOutlineDown />
      </header>
      <div className="overflow-y-hidden" style={{ height: open ? "100%" : 0 }}>
        {children}
      </div>
    </li>
  );
};
