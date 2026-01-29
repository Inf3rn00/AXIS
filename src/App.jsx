import "./App.css";
import Dashboard from "./Pages/dashboard";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActivityDetails from "./Pages/Recent Activity Pages/ActivityDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/activity/:id" element={<ActivityDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
