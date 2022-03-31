import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { WorkDetailView, WorkListView } from './pages';

const WorkRoutes: FC = () => (
  <Routes>
    <Route path="/:workSlug" element={<WorkDetailView />} />
    <Route path="" element={<WorkListView />} />
  </Routes>
);

export default WorkRoutes;
