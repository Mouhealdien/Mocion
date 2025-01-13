import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Player from "./pages/Player";
import ClubOwner from "./pages/ClubOwner";
import LogIn from "./pages/LogIn";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/player" />} />
        <Route path="/player" element={<Player />} />
        <Route path="/clubowner" element={<ClubOwner />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}
