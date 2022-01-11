// Import statements for App.css local styles,
// Home, About and Projects components,
// and the Router, Routes and Route components for navigation.
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Return a set of Routes for app url navigation/component rendering.
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

// Export default App component
export default App;
