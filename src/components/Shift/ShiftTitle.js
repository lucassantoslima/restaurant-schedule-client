import React from "react";

const ShiftTitle = (props) => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">         
          <p class="fs-1">{props.title}</p>
        </div>
        <div class="col-6">
          <p class="fs-1">{props.worker}</p>
        </div>
      </div>
    </div>
  );
};

export default ShiftTitle;
