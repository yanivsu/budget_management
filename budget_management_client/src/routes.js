import { Route, Switch } from "react-router-dom";
import { DashboardComponent } from "./components/DashboardComponent";
import TransactionForm from "./components/TransactionForm";
import { TableComponent } from "./components/TableComponent";

const routing = () => (
  <div>
    <Switch>
      <Route exact path="/" component={DashboardComponent} label="Home" />

      <Route path="/tableScreen" component={TableComponent} />
      <Route path="/addTransaction" component={TransactionForm} />
      {/*<Route path="/customer/new" component={CreateCustomer} />*/}
    </Switch>
  </div>
);
export default routing;
