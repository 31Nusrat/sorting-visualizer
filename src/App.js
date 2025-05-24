import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SortingVisualizer from "./components/SortingVisualizer";
import SortingInfo from "./components/SortingInfo";
import "./App.css"; // We'll put navbar styles here

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1 className="logo">Sorting Visualizer</h1>
        <div className="nav-links">
          <Link to="/" className="nav-link">Visualizer</Link>
          <Link to="/info" className="nav-link">About Algorithms</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<SortingVisualizer />} />
        <Route path="/info" element={<SortingInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
