import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

// components
import Nav from "./components/Nav";

function App() {
  return (
      <div className='background relative'>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
