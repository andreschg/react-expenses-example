import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expenseData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expenseData[id] = { description, note, amount, createdAt};
  });
  database.ref('expenses').set(expenseData).then(() => { done(); });
});

test('should setup remove expense action object', () => {
  const result = removeExpense({ id: '123abc'})
  
  // Use toEqual to eval object or arrays
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const result = editExpense('123abc', {
    amount: 1346,
    createdAt: 0,
    description: 'Bill',
    note: 'hello'
  });

  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc', 
    updates: {
      amount: 1346,
      createdAt: 0,
      description: 'Bill',
      note: 'hello'
    }
  });
});

test('should set up add expense action object with values', () => {
  const result = addExpense(expenses[1]);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

test('shoud add an expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});


test('shoud add expense with defaults to database and store', (done) => {
  const defaultExpense = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0 
  };
  const store = createMockStore({});
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense);
    done();
  });
});

test('should setup set expenses action object with data ', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fecth the expenses from firebse', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses(expenses)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});