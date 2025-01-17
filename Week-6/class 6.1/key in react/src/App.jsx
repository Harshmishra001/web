
import { useState } from "react"
let GLOBAL_ID = 4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    id: 2,
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    id: 3,
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])

  function addTodo() {
    setTodos([...todos, {
      id: GLOBAL_ID++,
      title: "new todo",
      description: "new todo desc"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map((todo,index) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
      {/* {todos.map((todo, index) => <Todo title={todo.title} description={todo.description} />)} */}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App
// React Virtual DOM ka use rendering ko optimize karne ke liye karta hai. Jab changes hote hain, React naye Virtual DOM ko purane se compare karta hai taaki minimal updates pata chal sakein. Key ka use React ko efficiently ye identify karne mein madad karta hai ki kaunse items change hue hain, add hue hain, ya remove hue hain.

// 1. **Bina key ke**: React ko har element ko ek-ek karke compare karna padta hai, jo inefficient ho sakta hai.
// 2. **Key ke sath**: React direct track kar sakta hai aur sirf un elements ko update karta hai jo change hue hote hain, kyunki har item ka unique key hota hai.