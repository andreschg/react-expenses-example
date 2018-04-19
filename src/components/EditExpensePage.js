import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemoveButtonClick = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
        <button onClick={this.onRemoveButtonClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => { dispatch(editExpense(id, expense)); },
  removeExpense: (id) => { dispatch(removeExpense({id})); }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);