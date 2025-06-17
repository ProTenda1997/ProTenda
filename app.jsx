import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import ForPros from "./ForPros";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/for-pros" element={<ForPros />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;