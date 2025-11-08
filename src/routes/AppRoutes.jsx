import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Services, AboutUs, Contact, References } from '../pages';
import LandingPage from '../components/LandingPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/references' element={<References />} />
      <Route path='/cad-services' element={<Services />} />
      <Route path='/architecture' element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
