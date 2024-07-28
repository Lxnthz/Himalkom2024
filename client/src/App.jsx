import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import ProfileHimalkom from './pages/ProfileHimalkom';
import ProfileDivisi from './pages/ProfileDivisi';
import Ilkomunity from './pages/Ilkomunity';
import Komnews from './pages/Komnews';
import Riset from './pages/Riset';
import Syntax from './pages/Syntax';
import IGallery from './pages/IGallery';
import AgriUX from './pages/community/AgriUX';
import CSI from './pages/community/CSI';
import Agribot from './pages/community/Agribot';
import CP from './pages/community/CP';
import Daming from './pages/community/Daming';
import IWDC from './pages/community/IWDC';
import Gary from './pages/community/Gary';
import MAD from './pages/community/MAD';
import Header from './components/Header';
import Footer from './components/Footer';
import Notfound from './pages/Notfound';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
            <Route path="/profile/details" element={<ProfileHimalkom />} />
            <Route path="/profile/divisi/:division" element={<ProfileDivisi />} />
            <Route path="/community" element={<Ilkomunity />} />
            <Route path="/igallery" element={<IGallery />} />
            <Route path="/komnews" element={<Komnews />} />
            <Route path="/research" element={<Riset />} />
            <Route path="/syntax" element={<Syntax />} />
            <Route path="/*" element={<Notfound />} />
              <Route path="/community/AgriUX" element={<AgriUX />} />
              <Route path="/community/CSI" element={<CSI />} />
              <Route path="/community/Agribot" element={<Agribot />} />
              <Route path="/community/CP" element={<CP />} />
              <Route path="/community/Daming" element={<Daming />} />
              <Route path="/community/IWDC" element={<IWDC />} />
              <Route path="/community/Gary" element={<Gary />} />
              <Route path="/community/MAD" element={<MAD />} />
          </Routes>
        </main>
        {!(window.location.pathname.startsWith('/admin') && loggedIn) && <Footer />}
      </div>
    </Router>
  );
}

export default App;
