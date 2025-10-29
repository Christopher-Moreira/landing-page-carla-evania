import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SobreMimPage from "./Pages/SobreMimPage";
import Encontrar from "./Pages/Encontrar";

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sobre" element={<SobreMimPage />} />
        <Route path="/redes" element={<Encontrar />} />
      </Routes>
    </Router>
  );
}

export default App
