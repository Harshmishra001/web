// PROP-DRILLING IN REACT

import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Count count={count} setCount={setCount} />      {/* yha Count ko parent bnaya fir niche define kia usme child dala Bountn function fir usse niche define kia . */}
    </div>
  )
}

function Count({count,setCount}) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}/>
  </div>
}

function Buttons({count,setCount}) {
  return <div>
    <button onClick={() => {setCount(count+1)}}>Increase</button>
    <button onClick={() => {setCount(count-1)}}>Decrease</button>
  </div>
}

export default App


// Prop drilling refers to the process of passing down data (props) from a parent component to nested child 
// components through multiple layers in the component tree. In React or other component-based frameworks, 
// components are often organized in a hierarchical structure, and sometimes, data needs to be passed from a 
// top-level component to a deeply nested component. Prop drilling involves passing this data through each 
// intermediate component in the hierarchy until it reaches its intended destination.

// Prop drilling can lead to verbose and boilerplate code, especially in large component trees. Passing the same
// props through multiple layers of components can make the code harder to read and maintain.