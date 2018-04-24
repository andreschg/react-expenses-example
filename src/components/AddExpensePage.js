import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    //props.dispatch(addExpense(expense));
    // This is easier to test
    this.props.startAddExpense(expense);
    // Redirect to the dashboard page.
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
          <h1>Add Expense</h1>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);