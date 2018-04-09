import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filter';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

// addExpense -> water bill
store.dispatch(addExpense({ description: 'Water bill', amount: 500}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 400}));
store.dispatch(setTextFilter('gas'));

const storeState = store.getState();

console.log(getVisibleExpenses(storeState.expenses, storeState.filters));
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
