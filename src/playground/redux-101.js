import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  console.log(`Running action: ${action.type}`);
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1; 
      return {
        count: state.count - decrementBy
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
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'RESET'
});


store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
})


console.log('hello world!!'); 

// Remove the last subscribe
watcherUnsubscribre();