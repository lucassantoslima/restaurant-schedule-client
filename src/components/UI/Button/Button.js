import React from "react";

const Button = (props) => {
  return ( 
        <button {...props} className="btn btn-primary btn-lg">
            {props.children}
        </button>   
  );
}

export default Button; 