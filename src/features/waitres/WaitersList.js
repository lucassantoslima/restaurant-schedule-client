import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ShiftList from "../../components/Shift/ShiftList"
import axios from "axios";
import { DaysOfWeek } from "../../constants/Days";
import { useDayOfWeek } from "../../Hooks/UseDayOfWeek";
import { Api } from "../../constants/Api";
import ShiftTitle from "../../components/Shift/ShiftTitle";
import ShiftActions from "../../components/Shift/ShiftActions";

export default function WaitersList(props) {
  const [waiters, setWaiters] = useState();
  
  const { dayOfWeek, setDayOfWeek } = useDayOfWeek();

  useEffect(() => {
    loadWaiters();
  }, []);

  const loadWaiters = async () => {
    const result = await axios.get(Api.Waiters);
    setWaiters(result.data[0]);
  };

  const nextBtnHandler = (param) => {
    setDayOfWeek(dayOfWeek + 1)
   };
 
   const prevtBtnHandler = (param) => {
     setDayOfWeek(dayOfWeek - 1)
    };
 
  return (
    <Layout > 
      <ShiftTitle worker="Waiter" title={`${DaysOfWeek[dayOfWeek]}`}/>
      <ShiftList list={waiters && waiters[DaysOfWeek[dayOfWeek]]} />
      <ShiftActions onNextDay={nextBtnHandler} onPrevDay={prevtBtnHandler} dayOfWeek={dayOfWeek}/>
    </Layout>
  );
}
