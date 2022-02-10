import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingListView from './pages';

const LandingRoutes: FC = () => (
  <Routes>
    <Route path="" element={<LandingListView />} />
  </Routes>
);

export default LandingRoutes;
