import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm expense={props.expense} onSubmit={(expense) => {
      props.dispatch(editExpense(props.match.params.id, expense));
      props.history.push('/');
    }}/>
    <button onClick={()=> {
      props.dispatch(removeExpense({ id: props.expense.id }));
      props.history.push('/');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);