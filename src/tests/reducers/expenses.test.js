import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, {
    type: '@@INIT'
  });
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add a new expense', () => {
  const expense = {
    id: '4',
    description: 'Gun',
    note: '',
    amount: 195,
    createdAt: 0
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(...expenses, expense);
});

test('Should edit a expense by id', () => {
  const updates = {
    ...expenses[1],
    description: 'Edited element',
    note: 'New note'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual(updates);
});

test('Should not edit a expense if doesnt found the id', () => {
  const updates = {
    description: 'Edited element',
    note: 'New note'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});