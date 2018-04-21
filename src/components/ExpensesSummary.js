import React from 'react';
import { connect } from 'react-redux';
import visiblesExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal}) =>(
  <div>
    <h1>Viewing {expensesCount} { expensesCount === 1 ? 'expense' : 'expeneses'} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
  </div>
);

const mapStateToProps = (state) => {
  const expenses = visiblesExpenses(state.expenses, state.filters);
  return {
    expensesCount: expenses.length,
    expensesTotal: expensesTotal(expenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);