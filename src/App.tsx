import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { Links } from './pages/Links';
 
 
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/javascript-sem-enrolacao" element={<LandingPage />} />
          <Route path="/" element={<Links />} />
        </Routes>
    </Router>
  )
}

export default App
