import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <p>Description: {description}</p>
    <p>Amount: {amount}</p>
    <p>Created at: {createdAt}</p>
  </div>
);

export default ExpenseListItem;