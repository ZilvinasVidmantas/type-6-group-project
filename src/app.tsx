import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import CategoryPage from './pages/category-page';
import SubcategoryPage from './pages/subcategory-page';
import MainLayout from './components/main-layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
        <Route path="/:categoryId/:subcategoryId" element={<SubcategoryPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
