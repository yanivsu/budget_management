import "./App.css";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const transactions = {
  transactions: [
    {
      transaction_id: 1,
      transaction_name: "bit",
      amount: 200,
      type: "income",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 2,
      transaction_name: "paypal",
      amount: 5000,
      type: "income",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 3,
      transaction_name: "payffffpal",
      amount: 235,
      type: "income",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 4,
      transaction_name: "coffee",
      amount: 25,
      type: "expense",
      date: "2024-03-27T22:00:00.000Z",
    },
    {
      transaction_id: 5,
      transaction_name: "TV",
      amount: 2055,
      type: "expense",
      date: "2024-03-27T22:00:00.000Z",
    },
  ],
};

// TODO create a logo for the app
// TODO login an signup page
function App() {
  return (
    <div className="app">
      {/*<DashboardComponent/>*/}
      <TableComponent transactions={transactions} />
      {/*<TableComponent />*/}
    </div>
    // <Router>
    //     <Switch>
    //         <Route path="/dashboard">
    //             <DashboardComponent/>
    //         </Route>
    //         <Route path="/table">
    //             <TableScreen/>
    //         </Route>
    //         <Route path="/detail/:id">
    //             <DetailScreen/>
    //         </Route>
    //         <Route path="/">
    //             <DashboardComponent/>
    //         </Route>
    //     </Switch>
    // </Router>
  );
}

export default App;
