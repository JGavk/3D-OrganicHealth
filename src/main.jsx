import { BrowserRouter, Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/client';
import Layout from './layout/Layout';
import Landing from './pages/landing/Landing';
import './index.css';
import HeartIssue from './pages/organdev/HeartIssue';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={< Landing/>}/>
        <Route path='heart-issue' element={ <  HeartIssue />}/>
      </Routes>
    </Layout>
  </ BrowserRouter >,
);
