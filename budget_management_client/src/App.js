import "./App.css";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
import TransactionForm from "./components/TransactionForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// TODO create a logo for the app
// TODO login an signup page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/transaction" element={<TransactionForm />} />
      </Routes>
    </Router>
  );
}

export default App;
