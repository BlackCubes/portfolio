import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticleDetailView, ArticleListView } from './pages';

const ArticleRoutes: FC = () => (
  <Routes>
    <Route path="/:id" element={<ArticleDetailView />} />
    <Route path="" element={<ArticleListView />} />
  </Routes>
);

export default ArticleRoutes;
