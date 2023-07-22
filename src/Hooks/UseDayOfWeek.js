import { useContext } from "react";
import { DayOfWeekContext } from "../context/DayOfWeek";

export const useDayOfWeek = () => {
  const context = useContext(DayOfWeekContext);
  if (!context) {
    throw new Error("UseDayOfWeek must be used within an DayOfWeekProvider");
  }
  return context;
};
