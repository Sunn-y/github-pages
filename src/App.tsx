import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/App.css';

import GlobalNavBar from './components/GlobalNavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
