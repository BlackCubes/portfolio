import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ArticleListView } from './pages';

const ArticleRoutes: FC = () => (
  <Routes>
    <Route path="" element={<ArticleListView />} />
  </Routes>
);

export default ArticleRoutes;
