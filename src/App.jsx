import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GymLandingPage from './components/GymLandingPage';

function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <Routes>
      <Route 
        path="/*" 
        element={<GymLandingPage activeSection={activeSection} setActiveSection={setActiveSection} />} 
      />
      {/* Future routes can be added here */}
    </Routes>
  );
}

export default App;
