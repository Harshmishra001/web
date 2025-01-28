import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    // recoilroot tag k andr vhi likho jha jha recoil use kia h
    <div>
      <RecoilRoot>       
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render"); // now Count do not re-render 
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>{count}</b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  // Using selector
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is even" : null}
  </div>


  // Without selector
  // const count=useRecoilValue(countAtom);
  // if (count%2===0) return <div>
  //   It is even
  // </div>
}

function Buttons() {
  // Buttons get re-render as count changes we can avoid them 
  // const [count,setCount] = useRecoilState(countAtom)
  // console.log("buttons re-rendererd");
  // return <div>
  //   <button onClick={() => {
  //     setCount(count + 1)
  //   }}>Increase</button>

  //   <button onClick={() => {
  //     setCount(count - 1)
  //   }}>Decrease</button>
  // </div>



 // As we don't want buttons to re-render Buttons 
  const setCount = useSetRecoilState(countAtom);

  return <div>
  <button onClick={() => {setCount(count=>count + 1)}}>Increase</button>
  <button onClick={() => {setCount(count=>count - 1) }}>Decrease</button>
 </div>
}

export default App

// In React, state management refers to the management of the component's local state as well as the flow of data 
// between components avoiding unnecessary re-rendering.

// Recoil is a state management library for React applications developed by Facebook. It provides a simple and 
// flexible way to manage the state of your application, especially when dealing with complex state logic and 
// sharing state among different components. Other ones are redux, zustand etc.

// Atoms are units of state in Recoil. They represent individual pieces of state that can be read from or written
// to by different components.

// Selectors provide a cleaner and more maintainable approach to compute derived values from state in state 
// management libraries like Recoil. They encapsulate logic, promote reusability, and come with built-in 
// optimizations for improved performance by recalculating values only when necessary. It is like useMemo not same.

// The RecoilRoot is a component provided by Recoil that serves as the root of the Recoil state tree. It must be
// placed at the top level of your React component tree to enable the use of Recoil atoms and selectors throughout
// your application.

// useRecoilState is a hook that returns an array where the first element is the current state value, and the 
// second element is a function to update the state. 

// useRecoilValue is a hook that returns the current value of the Recoil state.

// useSetRecoilState is a hook that returns a function that allows you to update the value of the Recoil state.

// Using setCount(count => count + 1) ensures that you always work with the most recent state, especially during
// asynchronous or batched updates. If you use setCount(count + 1), multiple updates could refer to the same
// initial state, leading to incorrect results. The function version guarantees that each update accurately
// reflects the latest state.