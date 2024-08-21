import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import ProfileHimalkom from './pages/ProfileHimalkom';
import ProfileDivisi from './pages/ProfileDivisi';
import Ilkomunity from './pages/Ilkomunity';
import Komnews from './pages/Komnews';
// import Riset from './pages/Riset';
import Syntax from './pages/Syntax';
// import IGallery from './pages/IGallery';
import Header from './components/Header';
import Footer from './components/Footer';
import PreloaderContainer from "./components/Preloader/PreloaderContainer";

function AppContent() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.message === 'Login successful') {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    const isAdminRoute = location.pathname.startsWith('/admin');

    if (showPreloader && !isAdminRoute) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 14000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-hidden');
    };
  }, [showPreloader, location.pathname]);

  // Function to determine if the current route is an admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {showPreloader && !isAdminRoute && (
        <motion.section
          className='absolute overflow-hidden h-[100vh] w-full inset-0 z-50 flex justify-center items-center bg-[#E49800]'
          initial={{ y: 0 }}
          animate={{ y: '-100%', overflow: 'visible'}}
          transition={{ duration: 1, delay: 13 }}
        >
          <PreloaderContainer />
        </motion.section>
      )}
      {!isAdminRoute && <Header loggedIn={loggedIn} onLogout={handleLogout} />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin handleLogin={handleLogin} />} />
          <Route path="/admin-dashboard" element={loggedIn ? <AdminDashboard /> : <Navigate to="/admin" />} />
          <Route path="/profile/details" element={<ProfileHimalkom />} />
          <Route path="/profile/divisi/:division" element={<ProfileDivisi />} />
          <Route path="/community" element={<Ilkomunity />} />
          {/* <Route path="/igallery" element={<IGallery />} /> */}
          <Route path="/komnews" element={<Komnews />} />
          {/* <Route path="/research" element={<Riset />} /> */}
          <Route path="/syntax" element={<Syntax />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
