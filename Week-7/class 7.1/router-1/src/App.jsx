// CLIENT SIDE ROUTING 

import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import { Dashboard } from './components/dashboard'
import { Landing } from './components/landing'

function App() {
  return (
    <BrowserRouter>
    <div>
      
    {/* fixed navbar */}
       <div style={{background:"red"}}>     
        HI I AM CLIENT SIDE ROUTING
      </div>

      <br></br>

      <div>
      <button onClick={()=>{window.location.href="/" }}> LANDING</button>
      <button onClick={()=>{window.location.href="/dashboard" }}> DASHBOARD</button>
      </div>
      
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>  
    <Route path="/" element={<Landing/>}/>  
    </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App

// When using window.location.href for navigation in a React application, it triggers a full page reload, which is 
// not desirable in client-side routing. A full page reload involves fetching the HTML, CSS, and other assets again, 
// leading to a slower and less efficient user experience.