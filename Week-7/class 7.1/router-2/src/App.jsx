// CLIENT SIDE ROUTING 

// better way to navigate than router-1 class

import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/dashboard'
import { Landing } from './components/landing'

function App() {
  // all the navigation code should be inside <BrowserRouter> so we make an Appbar function
  return (
    <BrowserRouter>
                   {/* fixed navbar */}
        <div style={{ background: "red" }}> 
          HI I AM CLIENT SIDE ROUTING
        </div>

        <br />

        <Appbar /> 

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>

    </BrowserRouter>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Landing page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App

// useNavigate hook is a part of React Router and provides a convenient way to navigate between routes in a React 
// application. It gives you a navigate function, which you can use to programmatically navigate to different pages 
// or components based on user interactions without reloading the entire page.

// The useNavigate hook can only be used inside a component that is a child of BrowserRouter.