import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
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

// In Recoil, selectorFamily is a function that allows you to create a family of selectors, each associated with a 
// specific parameter. This is useful when you need to derive state dynamically based on varying parameters.