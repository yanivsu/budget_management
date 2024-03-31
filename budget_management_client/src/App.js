import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
import TransactionForm from "./components/TransactionForm";
import { Login } from "./components/Login";

// TODO create a logo for the app
// TODO login an signup page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/transaction" element={<TransactionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
