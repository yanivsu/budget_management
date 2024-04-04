import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withAuth from "./components/auth/auth";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
import TransactionFormComponent from "./components/TransactionFormComponent";
import { LoginComponent } from "./components/LoginComponent";
import { TransactionInfoComponent } from "./components/TransactionInfoComponent";

function App() {
  return (
    <>
      <Router>
        {/*<NavigationBar username="" />*/}
        {/* all routs are protected with an withAuth middleware for authentication*/}
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/dashboard" element={withAuth(DashboardComponent)} />
          <Route path="/table" element={withAuth(TableComponent)} />
          {/* nested route for the transaction info*/}
          <Route
            path="/transactionInfo/:transactionId"
            element={withAuth(TransactionInfoComponent)}
          />
          <Route
            path="/transaction"
            element={withAuth(TransactionFormComponent)}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
