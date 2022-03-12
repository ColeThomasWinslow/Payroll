import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import AddNew from "./components/AddNew/AddNew";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Add" element={<AddNew />} />
          <Route path="/Employees" element={<Employees />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
