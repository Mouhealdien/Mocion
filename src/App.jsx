import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Player from './pages/Player';
import ClubOwner from './pages/ClubOwner';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/player" />} />
        <Route path='/player' element={<Player />} />
        <Route path='/clubowner' element={<ClubOwner />} />
      </Routes>
    </Router>
  );
}