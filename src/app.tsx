import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import LandingPageLayout from './components/landing-page-layout';
import ListPage from './pages/list-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="test" element={<ListPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
