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
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// addExpense -> water bill
store.dispatch(addExpense({ description: 'Water bill', amount: 500}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 400, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 155}));

const storeState = store.getState();

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
