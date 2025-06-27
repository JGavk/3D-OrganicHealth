import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './layout/Layout';
import Landing from './pages/landing/Landing';
import Problems from './pages/heart-problem/Problems';
import BeatingHeart from './pages/beatingHeart/Beatingheart';
import IschemicHeart from './pages/ischemicheart/IschemicHeart';
import Heart1 from './pages/heart/Heart1';
import Heart2 from './pages/heart/Heart2'; // 👈 NUEVA IMPORTACIÓN
import HeartIssue from './pages/organdev/HeartIssue';

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
        <Route path='/models/stenosis' element={<HeartIssue />} />
        <Route path='/models/beating' element={<BeatingHeart />} />
        <Route path='/models/ischemic' element={<IschemicHeart />} />
        <Route path='/models/miocard' element={<Heart1 />} />
        <Route path='/models/sintomas' element={<Heart2 />} /> {/* 👈 NUEVA RUTA */}
      </Routes>
    </Layout>
  </BrowserRouter>
);
