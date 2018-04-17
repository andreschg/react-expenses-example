import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filter';
import moment from 'moment';

test('should generat set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generat set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('should generat set text filter action object', () => {
  const text = 'Rent';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});


test('should generat set text filter action object without parameter', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});


test('should generat set sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
  });
});


test('should generat set sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SET_SORT_BY',
    sortBy: 'date'
  });
});