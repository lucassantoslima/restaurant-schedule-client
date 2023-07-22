import React from "react";

const Layout = (props) => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Layout;
