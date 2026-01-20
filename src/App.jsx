import "./App.css";
import Dashboard from "./Pages/dashboard";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ActivityDetails from "./Pages/Recent Activity Pages/ActivityDetails";
import TaskManager from "./Components/TaskManager";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Dashboard/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;
