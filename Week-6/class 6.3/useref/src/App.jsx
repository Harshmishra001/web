import { useEffect, useRef } from 'react'

function App() {
  // Ugly way of writin the code
  // const incomeTax = 20000;
 
  // useEffect(() => {
  //   setTimeout(() => {
  //    document.getElementById("it").innerHTML=10;
  //   }, 5000);
  // }, [])

  // return (
  //   <div>
  //       hi there, your income tax returns are <div id="it">{incomeTax}</div>
  //   </div>
  // )


// Cleaner way to write the code using useRef
const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return <div>
        hi there, your income tax returns are <div ref={divRef}> {incomeTax} </div>
    </div>
  
}

export default App

// useRef hook is primarily used for creating mutable object references. While it can be used for various purposes,
// its most common use case in the context of the DOM is to interact with or reference DOM elements directly. When 
// a ref is attached to a DOM element, it allows you to access and modify properties of that element.