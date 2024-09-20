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
import BP from './pages/divisi/BP';
import BPH from './pages/divisi/BPH';
import Edukasi from './pages/divisi/Edukasi';
import Eksternal from './pages/divisi/Eksternal';
import HRD from './pages/divisi/HRD';
import Internal from './pages/divisi/Internal';
import Medbrand from './pages/divisi/Medbrand';
import Ristek from './pages/divisi/Ristek';
import Entrepreneur from './pages/divisi/Entrepreneur';

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
              <Route path="profile/divisi/bp" element={<BP />} />
              <Route path="profile/divisi/bph" element={<BPH />} />
              <Route path="profile/divisi/edukasi" element={<Edukasi />} />
              <Route path="profile/divisi/eksternal" element={<Eksternal />} />
              <Route path="profile/divisi/hrd" element={<HRD />} />       
              <Route path="profile/divisi/internal" element={<Internal />} />   
              <Route path="profile/divisi/medbrand" element={<Medbrand />} />   
              <Route path="profile/divisi/ristek" element={<Ristek />} />  
              <Route path="profile/divisi/entrepreneur" element={<Entrepreneur />} />       
            <Route path="/community" element={<Ilkomunity />} />
            <Route path="/komnews" element={<Komnews />} />
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
      </div>
    </Router>
  );
}

export default App;
