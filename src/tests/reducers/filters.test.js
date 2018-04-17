import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
}); 

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SET_SORT_BY', sortBy: 'amount' });
  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SET_SORT_BY', sortBy: 'date' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Rent'} );
  expect(state.text).toBe('Rent');
});

test('should set start date filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: 15465800 });
  expect(state.startDate).toBe(15465800);
});

test('should set end date filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: 15465800 });
  expect(state.endDate).toBe(15465800);
});