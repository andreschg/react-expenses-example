import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense, index) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);