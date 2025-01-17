import { useState } from "react"

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
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

// Problem yeh hai ki jab hum button pe click karte hain, toh dono headers re-render ho jate hain, lekin humein nahi chahiye ki second header re-render ho kyunki wo static hai. Toh hum re-rendering ko minimize karenge.

// Iske liye hum React mein **`React.memo`** ya **`useMemo`** ka use kar sakte hain. **`React.memo`** component ko memoize karta hai, matlab agar component ka props nahi badalte, toh wo dobara render nahi hota. Isse hum second header ko unnecessary re-rendering se bachaa sakte hain, aur performance improve kar sakte hain.