import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './router';

// Global Bootstrap & Icons Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';

// AOS Animation Library — loaded from npm (removes CDN render-blocking)
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
