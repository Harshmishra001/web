import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={() => setSelectedId(1)}>1</button>
    <button onClick={() => setSelectedId(2)}>2</button>
    <button onClick={() => setSelectedId(3)}>3</button>
    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});
  useEffect(() => {                             //here useeffect is used to avoid unnecessary rerendering the expensive operation of fetching data baar baar but if i passs depedency array as id the only do rerender for specific id only 
    console.log("fetch code rerender")
    fetch(`http://localhost:3000/todo?id=${id}`)
    .then( function(res) {
    return res.json();
    }).then(function(ans){
      setTodo(ans)
    })
  }, [id])  //agr ye dependency array hta de remove krde toh ye unlimited baar re render hoga or agr dependency khali chrd de toh sirf 1 baar chlega

  return <div>
    Id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;

// `useState` hook React mein functional components ke andar state variables declare karne ke liye use hota hai. Yeh ek array return karta hai jisme do elements hote hain: pehla element current state value, aur doosra element ek function jo aapko state ko update karne ka moka deta hai.

// `useEffect` ek aur important React hook hai jo aapko side effects perform karne ki suvidha deta hai functional components mein. React mein side effects generally data fetching, subscriptions, ya manually DOM ko change karne se related hote hain. `useEffect` hook React ke lifecycle methods jaise `componentDidMount`, `componentDidUpdate`, aur `componentWillUnmount` ka replacement hai jo class components mein use hote the. 

// `useEffect` hook pehla argument ek function leta hai, jisme wo code hota hai jo side effect perform karta hai. Dusra argument ek dependencies array hota hai. Agar is array mein koi value render ke beech change hoti hai, toh effect function dobara run hota hai. Agar dependencies array khali ho (`[]`), toh effect function sirf initial render ke baad ek baar run hota hai.