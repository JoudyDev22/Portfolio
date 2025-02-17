import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assests/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';

Aos.init();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



