import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
import TransactionFormComponent from "./components/TransactionFormComponent";
import { LoginComponent } from "./components/LoginComponent";
import { TransactionInfoComponent } from "./components/TransactionInfoComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />;
// TODO create a logo for the app

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path="/table" element={<TableComponent />} />
        {/*route gets the transaction id parameter*/}
        <Route
          path="/transactionInfo/:transactionId"
          element={<TransactionInfoComponent />}
        />
        <Route path="/transaction" element={<TransactionFormComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
