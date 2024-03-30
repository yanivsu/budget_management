import "./App.css";
import { DashboardComponent } from "./components/DashboardComponent";
import { TableComponent } from "./components/TableComponent";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// TODO create a logo for the app
// TODO login an signup page
function App() {
  return (
    <div className="app">
      {/*<DashboardComponent />*/}
      {/*<TableComponent transactions={transactions} />*/}
      <TableComponent />
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
