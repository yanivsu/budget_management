import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
import TransactionFormComponent from "./components/TransactionFormComponent";
import { LoginComponent } from "./components/LoginComponent";
import { TransactionInfoComponent } from "./components/TransactionInfoComponent";

// TODO create a logo for the app
// TODO login an signup page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/transaction" element={<TransactionFormComponent />} />
        <Route path="/transactionInfo" element={<TransactionInfoComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
