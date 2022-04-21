import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import LandingPageLayout from './components/landing-page-layout';
import CategoryPage from './pages/category-page';
import SubcategoryPage from './pages/subcategory-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/category/:categoryId/:subcategoryId" element={<SubcategoryPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
