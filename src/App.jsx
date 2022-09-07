import { HashRouter, Link, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"

function App() {
  return (
    <>
      <div className="App">
        <h1>Portfolio</h1>
      </div>

      <HashRouter basename="/">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Page</Link> <br />
        </nav>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
    
  )
}

export default App
