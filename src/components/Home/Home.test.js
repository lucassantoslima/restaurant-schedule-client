import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 
import Home from "./Home";

test("renders the Home component", () => {
  render(<Home />);
  // Add your test assertions here if necessary
});
