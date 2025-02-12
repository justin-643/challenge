import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Admin from './Components/Admin';

function App() {
  // State to check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Protected Route Component
  const ProtectedRoute = ({ element, redirectTo }) => {
    return isAuthenticated ? element : <Navigate to={redirectTo} />;
  };

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          
          {/* Protected Admin Route */}
          <Route path="/Admin" element={<ProtectedRoute element={<Admin />} redirectTo="/Admin" />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
