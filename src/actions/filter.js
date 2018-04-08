// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SET_SORT_BY',
  sortBy: 'amount'
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SET_SORT_BY',
  sortBy: 'date'
});

// SET_START_DATE
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
});