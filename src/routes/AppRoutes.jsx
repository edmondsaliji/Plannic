import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Services, AboutUs, Contact, References } from '../pages';
import LandingPage from '../components/LandingPage';
import CADServices from '../pages/CADServices';
import Architecture from '../pages/Architecture';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/references' element={<References />} />
      <Route path='/cad-services' element={<CADServices />} />
      <Route path='/architecture' element={<Architecture />} />
    </Routes>
  );
}

export default AppRoutes;
