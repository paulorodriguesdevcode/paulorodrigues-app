import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { Links } from './pages/Links';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  )
}

export default App
