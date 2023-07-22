import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import ShiftList from "../../components/Shift/ShiftList";
import axios from "axios";
import { DaysOfWeek } from "../../constants/Days";
import { useDayOfWeek } from "../../Hooks/UseDayOfWeek";
import { Api } from "../../constants/Api.js";
import ShiftTitle from "../../components/Shift/ShiftTitle";
import ShiftActions from "../../components/Shift/ShiftActions";

export default function CooksList(props) {
  const [cooks, setCooks] = useState();

  const { dayOfWeek, setDayOfWeek } = useDayOfWeek();

  useEffect(() => {
    loadCooks();
  }, []);

  const loadCooks = async () => {
    const result = await axios.get(Api.Cooks);
    setCooks(result.data[0]);
  };

  const nextBtnHandler = (param) => {
    setDayOfWeek(dayOfWeek + 1);
  };

  const prevtBtnHandler = (param) => {
    setDayOfWeek(dayOfWeek - 1);
  };

  return (
    <Layout>
      <ShiftTitle worker="Cook" title={`${DaysOfWeek[dayOfWeek]}`} />
      <ShiftList list={cooks && cooks[DaysOfWeek[dayOfWeek]]} />
      <ShiftActions
        onNextDay={nextBtnHandler}
        onPrevDay={prevtBtnHandler}
        dayOfWeek={dayOfWeek}
      />
    </Layout>
  );
}
