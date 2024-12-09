import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import VerificationPage from './components/VerificationPage';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
