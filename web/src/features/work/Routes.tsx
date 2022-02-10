import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import WorkListView from './pages';

const WorkRoutes: FC = () => (
  <Routes>
    <Route path="" element={<WorkListView />} />
  </Routes>
);

export default WorkRoutes;
