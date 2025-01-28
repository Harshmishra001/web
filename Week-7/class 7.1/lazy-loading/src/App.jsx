// LAZY LOADING IN REACT

import { Suspense, lazy } from 'react'
import './App.css'
import {BrowserRouter , Routes , Route, useNavigate} from "react-router-dom"

// ye h syntax niche lazy loading import krane ka or isme dashboar,landing componrt m export default lga  dia jiski vjh s const {Dasboard}   ese ni likhna pdta direct likho default lgane k baad import Dashboard ese.
const Dashboard =lazy(()=>import('./components/dashboard'))   //UPR CURLY BRACET M LAZY IMPOET KRAYA H REACT SE ISLIYE YHA DIRECT LAZY() LIKHA 
const Landing=lazy(()=>import('./components/landing'))

function App() {
  return (
    <BrowserRouter>

      <div style={{background:"red"}}> 
        HI I AM CLIENT SIDE ROUTING
      </div>

      <br></br>

      <Appbar />

{/* REMEMBER THE SYNTACX OF LAZY LOADING SUSPENSE TAG USE KRNA HOTA H */}
      <Routes>  
            <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard/> </Suspense>}/>
            <Route path="/" element={<Suspense fallback={"loading..."}> <Landing/> </Suspense>}/>
      </Routes>
  </BrowserRouter>
  )
}

function Appbar() { 
  const navigate = useNavigate();

  return <div>
      <div>
        <button onClick={() => { navigate("/");  }}>Landing page</button>

        <button onClick={() => { navigate("/dashboard"); }}>Dashboard</button>
      </div>
  </div>
}

export default App

// Lazy loading in React is a technique to improve performance by loading components only when they're needed, 
// rather than all at once. It’s done using React.lazy() to dynamically import components and Suspense to show a
// fallback UI (like a loader) while waiting for the component to load. This reduces the initial load time, leading 
// to a faster and smoother user experience, especially for large applications.

// Components Dashboard and Landing are loaded dynamically using React.lazy(). This means they are not part of the 
// initial JavaScript bundle but will be loaded only when the user navigates to the respective route.