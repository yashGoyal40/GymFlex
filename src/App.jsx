// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GymLandingPage from './components/GymLandingPage';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<GymLandingPage />} />
      {/* Future routes can be added here */}
    </Routes>
  );
}

export default App;
