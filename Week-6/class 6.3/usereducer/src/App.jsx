import React, { useReducer } from 'react';


function reducer(state, action) {
  if (action.type === 'increment') {
    return state + 1 ;
  } else if (action.type === 'decrement') {
    return state - 1 ;
  } 
}

function Counter() {

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>Count: {state}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;

// The useReducer hook is a React hook designed for managing complex state logic within functional components. It 
// provides a more structured approach compared to useState. The useReducer hook involves a reducer function that 
// determines how the state should change based on actions dispatched to it. This function takes the current state 
// and an action as arguments, returning the new state. Along with the reducer, you provide an initialState to 
// initialize the state. The hook returns the current state and a dispatch function, which is used to send actions 
// to the reducer and trigger state updates.