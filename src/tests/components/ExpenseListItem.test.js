import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render expenseListItem with expense', () => {
  const wrapper = shallow(<ExpenseListItem { ...expeses[1] } />);
  expect(wrapper).toMatchSnapshot();
});