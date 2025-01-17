import { useState } from "react"
import { memo } from 'react';
function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  )
}

const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})

export default App

// **React.memo** ek higher-order component hai jo ek component ko memoize karta hai, iska matlab hai ki yeh component ko dobara render hone se rokta hai jab tak uske props mein koi change na ho. Isse unnecessary re-renders prevent hote hain aur performance improve hoti hai.