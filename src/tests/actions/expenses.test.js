import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
  const expenseData = {
    description: 'Rend',
    amount: 109500,
    createdAt: 1000,
    note: 'this is last month rent'
  };

  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up add expense action object with default values', () => {
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '', 
      note: '',
      amount: 0, 
      createdAt: 0,
      id: expect.any(String) 
    }
  });
});
