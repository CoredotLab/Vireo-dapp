import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Staking from './pages/Staking';
import Governance from './pages/Governance';
import Proposal from './pages/Proposal';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
