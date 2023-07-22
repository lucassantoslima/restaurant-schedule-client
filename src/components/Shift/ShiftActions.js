import React from "react";
import Box from "../UI/Box/Box";
import Button from "../UI/Button/Button";

const ShiftActions = (props) => {
    
  const onNextDayHandler = () => { 
    props.onNextDay(1);
  };

  const onPrevDayHandler = () => {   
    props.onPrevDay(-1);
  };

  return (
    <Box>
      <Button
        class="btn-primary"
        onClick={onPrevDayHandler}
        disabled={props.dayOfWeek === 0}
      >
        Prev
      </Button>
      <Button
        class="btn-primary"
        onClick={onNextDayHandler}
        disabled={props.dayOfWeek >= 4}
      >
        Next
      </Button>
    </Box>
  );
};

export default ShiftActions;
