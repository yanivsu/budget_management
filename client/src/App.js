import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withAuth from "./components/auth/auth";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
import TransactionFormComponent from "./components/TransactionFormComponent";
import { LoginComponent } from "./components/LoginComponent";
import { TransactionInfoComponent } from "./components/TransactionInfoComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./components/NavigationBar";

<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />;

// TODO create a logo for the app

function App() {
  return (
    <>
      <Router>
        <NavigationBar username="" />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          {/*<Route path="/dashboard" element={withAuth(DashboardComponent)} />*/}
          <Route path="/dashboard" element={<DashboardComponent />} />
          {/*<Route path="/table" element={withAuth(TableComponent)} />*/}
          <Route path="/table" element={<TableComponent />} />
          {/*route gets the transaction id parameter*/}
          <Route
            path="/transactionInfo/:transactionId"
            // element={withAuth(TransactionInfoComponent)}
            element={<TransactionInfoComponent />}
          />
          <Route
            path="/transaction"
            // element={withAuth(TransactionFormComponent)}
            element={<TransactionFormComponent />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
