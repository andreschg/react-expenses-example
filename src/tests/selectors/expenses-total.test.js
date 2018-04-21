import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Shoul return 0 if no expenses', () => {
  const total = expensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = expensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test('Should correctly add up multiple expenses', () => {
  const total = expensesTotal(expenses);
  expect(total).toBe(114195);
});