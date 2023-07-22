import React from "react";
import { useDayOfWeek } from "../../Hooks/UseDayOfWeek";

const Home = () => {
  // setting days of the week to Monday
  const { setDayOfWeek } = useDayOfWeek();
  setDayOfWeek(0);
  
  return (
    <div className="container text-center mt-5">
      <div>
        <h1>Welcome!</h1>
      </div>
    </div>
  );
};

export default Home;
