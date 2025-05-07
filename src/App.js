import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; // ✅ Corrected import
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar /> {/* ✅ Show on all pages */}
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
        <Footer /> {/* ✅ Show on all pages */}
      </Box>
    </Router>
  );
}

export default App;
