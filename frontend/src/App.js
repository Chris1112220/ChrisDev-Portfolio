import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<div>About Page Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;