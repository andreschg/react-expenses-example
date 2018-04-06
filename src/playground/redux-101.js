import { createStore } from 'redux';

// Actions generators - functions that return action objects.

const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy =1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  console.log(`Running action: ${action.type}`);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  }
});

//Watch for changes
const watcherUnsubscribre = store.subscribe(() => {
  console.log('Change on state');
  console.log(store.getState());

});

// Dispatching actions
/*
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
*/

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));


console.log('hello world!!'); 

// Remove the last subscribe
watcherUnsubscribre();