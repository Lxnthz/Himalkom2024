import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  // Function to handle login form submission
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.message === 'Login successful') {
        setLoggedIn(true); // Update login status to true
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false); // Update login status to false
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {!(window.location.pathname.startsWith('/admin') && loggedIn) && <Header loggedIn={loggedIn} onLogout={handleLogout} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin handleLogin={handleLogin} />} />
            <Route path="/admin-dashboard/*" element={loggedIn ? <AdminDashboard /> : <AdminLogin handleLogin={handleLogin} />} />
          </Routes>
        </main>
        {!(window.location.pathname.startsWith('/admin') && loggedIn) && <Footer />}
      </div>
    </Router>
  );
}

export default App;
