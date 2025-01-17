import { useState } from "react"

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is raman" />
    </div>
  )
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={firstTitle} />
  </>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

// React mein **state ko push karna** ka matlab hai state ko component tree ke sabse neeche level tak manage karna. Iska fayda yeh hota hai ki state ko un components tak hi limit kiya jata hai jo uski zarurat hai, jisse upar ke components ke unnecessary re-renders reduce ho jate hain. Isse performance improve hoti hai aur app efficient banti hai.