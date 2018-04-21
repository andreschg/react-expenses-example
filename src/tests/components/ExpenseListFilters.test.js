import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
  <ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />);
});

test('should render expenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expenseListFilters with alt data correctly', () => {
  // If we need to change some prop declared on the beforeEach function
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'bill'
  wrapper.find('input').at(0).simulate('change', { target: { value }});
  expect(setTextFilter).toHaveBeenLastCalledWith(value); 
});


test('should handle sortByDate', () => {
  const value = 'date'
  wrapper.find('select').simulate('change', { target: { value }});
  expect(sortByDate).toHaveBeenCalled(); 
});


test('should handle sortByAmount', () => {
  const value = 'amount'
  wrapper.find('select').simulate('change', { target: { value }});
  expect(sortByAmount).toHaveBeenCalled(); 
});


test('should handle date changes', () => {
  const startDate = moment();
  const endDate = moment().add(5, 'days');
  wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('should handle date focus changes', () => {
  const value = 'endDate';
  console.log(wrapper);
  wrapper.find(DateRangePicker).prop('onFocusChange')(value);
  expect(wrapper.state('calendarFocused')).toBe(value);
});
