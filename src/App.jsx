import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"

import { HashRouter, Link, Routes, Route } from "react-router-dom";

const style = {display: "flex", gap: "1rem", padding: "1rem"}

function App() {
  return (
    <>
      <div className="App">
        <h1>Portfolio</h1>
      </div>

      <HashRouter basename="/">
        <nav style={style}>
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
