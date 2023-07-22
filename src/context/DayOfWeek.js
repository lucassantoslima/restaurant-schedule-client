import { createContext, useState } from 'react';

export const DayOfWeekContext = createContext();

export const DayOfWeekProvider = ({ children }) => {
  const [dayOfWeek, setDayOfWeek] = useState(0)

  return (
    <DayOfWeekContext.Provider value={{ dayOfWeek, setDayOfWeek }}>
      {children}
    </DayOfWeekContext.Provider>
  );
};