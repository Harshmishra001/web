// Without props

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(100);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   );
// }

// export default Counter;




// With props

import React , {useState} from 'react'
function App() {
  const [count, setCount] = useState(100)
  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  )
}
function Button({count,setCount}) {  // (props)
  function onButtonClick() {
    // setCount(count + 1);
    // setCount(count + 1); // do not increment the value 
    setCount(count=>count+1) // it will increment the value 
    
    // The reason is that React batches state updates during the same event for performance, so when you call 
    // setCount(props.count + 1) twice, both updates use the same initial value of count because the state 
    // hasn't updated yet. This causes only a single increment. To fix this, you can pass a function to setCount 
    // (like setCount(prevCount => prevCount + 1)) which ensures that each update uses the latest state value, 
    // allowing you to increment correctly.
  }
  function onButtonClick2() {
    setCount(count - 1);
  }
  return <>
  <button onClick={onButtonClick}>Counter {count}</button>
  <button onClick={onButtonClick2}>Counter {count}</button>
  </>
}
export default App

// In your React component, props are used to pass data and functions from the App component to the Button component.