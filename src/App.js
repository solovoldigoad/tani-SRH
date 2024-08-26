import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Assessment from './pages/Assessment';
import CareerPaths from './pages/CareerPaths';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './styles.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/career-paths" element={<CareerPaths />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
