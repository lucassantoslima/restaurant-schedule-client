import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CooksList from "./features/cooks/CooksList";
import { DayOfWeekProvider } from "./context/DayOfWeek";
import WaitersList from "./features/waitres/WaitersList";

function App() {
  return (
    <div className="App">
      <DayOfWeekProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/waiters" element={<WaitersList />} />
            <Route exact path="/cooks" element={<CooksList />} />
          </Routes>
        </Router>
      </DayOfWeekProvider>
    </div>
  );
}

export default App;
