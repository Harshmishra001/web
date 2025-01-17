import { useState , useEffect , useRef} from 'react'

function App() {
  const [count, setCount] = useState(0);
  let a=10;
  let b=useRef(10);

  useEffect(()=>{
    a=a+1;
    b.current=b.current+1
    console.log(`value of a=${a} and value of b=${b.current}`)
  })

  return (
    <>
    <button onClick={()=>setCount(count+1)}>count={count }</button>
    </>
  )
}

export default App

// Normal Variable (a): Each render will log the updated value of a, but the value of a will be reset to 10 on each 
// render because it is reinitialized with each render.
// Ref Variable (b): The b.current value persists across renders. You will see b.current incrementing with each 
// render and logging its updated value as the component updates.