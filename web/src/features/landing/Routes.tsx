import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './pages';

const LandingRoutes: FC = () => (
  <Routes>
    <Route path="" element={<LandingPage />} />
  </Routes>
);

export default LandingRoutes;
