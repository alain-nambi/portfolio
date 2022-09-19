import { useEffect } from "react";
import "./App.css"
import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    document.title = "Portfolio | Home"
  }, [])

  return (
    <>
      <Header></Header>

      {/* <HashRouter basename="/">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Page</Link> <br />
        </nav>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter> */}
    </>
    
  )
}

export default App
