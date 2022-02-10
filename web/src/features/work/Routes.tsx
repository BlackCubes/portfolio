import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import WorkPage from './pages';

const WorkRoutes: FC = () => (
  <Routes>
    <Route path="" element={<WorkPage />} />
  </Routes>
);

export default WorkRoutes;
