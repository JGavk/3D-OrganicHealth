<<<<<<< Updated upstream
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './layout/Layout';
import Landing from './pages/landing/Landing';
import Problems from './pages/heart-problem/Problems';
import BeatingHeart from './pages/beatingHeart/Beatingheart';
import IschemicHeart from './pages/ischemicheart/IschemicHeart';
import Heart1 from './pages/heart/Heart1';
import Heart2 from './pages/heart/Heart2'; 
import HeartIssue from './pages/organdev/HeartIssue';
import Heartfragmented from './pages/heartFragmented/Heartfragmented';

const getBasename = () => {
  if (import.meta.env.DEV) return '';
  if (window.location.pathname === '/') return '';
  return '/' + window.location.pathname.split('/')[1] || '';
};

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={getBasename()}>
    <Layout>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/models' element={<Problems />} />
         <Route path='/symptoms' element={<Heartfragmented/>} />
        <Route path='/models/stenosis' element={<HeartIssue />} />
        <Route path='/models/beating' element={<BeatingHeart />} />
        <Route path='/models/ischemic' element={<IschemicHeart />} />
        <Route path='/models/miocard' element={<Heart1 />} />
        <Route path='/models/sintomas' element={<Heart2 />} /> 
      </Routes>
    </Layout>
  </BrowserRouter>
);
>>>>>>> Stashed changes
