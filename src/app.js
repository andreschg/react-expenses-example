import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard page.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from expense component.
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from edit expense component.
  </div>
);

const HelpPage = () => (
  <div>
    This is from help component.
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create Expense</Link>
    <Link to="/edit">Edit expense</Link>
    <Link to="/help">Help</Link>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit" component={EditExpensePage} exact={true}/>
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>  
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
