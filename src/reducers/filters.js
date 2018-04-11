import moment from 'moment';

// Filter reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text 
      };
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state;
  }
};