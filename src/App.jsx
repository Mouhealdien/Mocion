import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Player from "./pages/Player";
import ClubOwner from "./pages/ClubOwner";
import LogInAndRegister from "./pages/LogInAndRegister";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/player" />} />
        <Route path="/player" element={<Player />} />
        <Route path="/clubowner" element={<ClubOwner />} />
        <Route path="/loginandregister" element={<LogInAndRegister />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
