import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));
   if (currentTodo.state === "loading") {
    return <div>loading</div>
 }
  return (
    <>
      {currentTodo.contents.id}
      <br></br>
      {currentTodo.contents.title}
      <br></br>
      {currentTodo.contents.description}
      <br></br>
      <br />
    </>
  )
}

export default App


// Both useRecoilStateLoadable and useRecoilValueLoadable provide a loadable object with a state property and
// a contents property. The state indicates the status of the selector, which can be 'hasValue', 'hasError',
// or 'loading'. The contents reflects the current state: the actual value if state is 'hasValue', the Error 
// object if state is 'hasError', and a Promise if state is 'loading'. The key difference is that 
// useRecoilStateLoadable also includes a setter function for updating the state, while useRecoilValueLoadable
// only provides the loadable object for reading the state.