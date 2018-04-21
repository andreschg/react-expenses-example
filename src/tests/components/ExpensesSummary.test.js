import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ExpensesSummary expensesCount={expenses.length} expensesTotal={114195}/>);
});

test('Should render ExpensesSummary component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render Expeneses summary componentes with no data', () => {
  wrapper.setProps({
    expensesCount: 0,
    expensesTotal: 0
  });
  expect(wrapper).toMatchSnapshot();
});