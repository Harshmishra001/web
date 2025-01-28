import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2}/> 
    {/* for id=2 it will not create two atoms , will create only one and return it when needed */}
  </RecoilRoot>
}

function Todo({id}) {
   const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.id}
      <br></br>
      {currentTodo.title}
      <br></br>
      {currentTodo.description}
      <br></br>
      <br />
    </>
  )
}

export default App

// In Recoil, an "atom family" is a function that returns an atom. Atom families are useful when you want to create 
// multiple atoms that share a similar structure. They allow you to parameterize the creation of atoms and generate 
// atoms dynamically based on a set of parameters. This promotes better organization, adaptability, and maintenance
// of your React application by allowing you to handle related pieces of state more dynamically and with less 
// redundancy.