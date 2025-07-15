import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderWrapper from './components/HeaderWrapper';

import Packages from './pages/Packages';
import Register from './pages/Register';
import Login from './pages/Login';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';



function App() {
  return (
    <Router>
      <HeaderWrapper />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book/:id" element={<Booking />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

