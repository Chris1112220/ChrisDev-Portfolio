import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<div>About Page Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
