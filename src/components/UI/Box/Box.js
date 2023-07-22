import React from "react";

const Box = (props) => {
  return (
    <div class="container text-center fixed-bottom mb-5">
      <div class="row">       
            {props.children.map((button) => (
                <div class="col-6">
                    {button}
                </div>
            ))}
      </div>
    </div>
  );
};

export default Box;
