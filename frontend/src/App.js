import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import AddNew from "./components/AddNew/AddNew";
import Employees from "./components/Employees/Employees";

import Login from "./components/AuthComp/Login";
import Register from "./components/AuthComp/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditEmployeeForm from "./components/EditEmployee/EditEmployeeForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Add" element={<AddNew />} />
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Employees/:id" element={<EditEmployeeForm />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
