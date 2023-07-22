import React from "react";

const ShiftList = (props) => {

  return (
    <ul class="list-group">
        { props.list && props.list.map((name) => ( 
            <li class="list-group-item" key={name}>{name}</li>
        ))}       
    </ul>
  );
}

export default ShiftList; 