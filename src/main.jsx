import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ContactUs from './pages/ContactUs.jsx';;
import Layout from './layouts/Layout.jsx';
import ScrollToTop from './components/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/shd-vcp-site">
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)