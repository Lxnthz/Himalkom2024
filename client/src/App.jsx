import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import PreloaderContainer from './components/Preloader/PreloaderContainer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProfileHimalkom from './pages/ProfileHimalkom';
import ProfileDivisi from './pages/ProfileDivisi';
import Ilkomunity from './pages/Ilkomunity';

//Ini Komnews
import Komnews from './pages/Komnews';
import Komnews_dalem from './pages/Komnews_dalem';
import Komnews_dalem2 from './pages/Komnews_dalem2';
import Komnews_dalem3 from './pages/Komnews_dalem3';
import Komnews_dalem4 from './pages/Komnews_dalem4';


// import Syntax from './pages/Syntax';
// import Riset from './pages/Riset';
import IGallery from './pages/IGallery';

// ------------------------------------- dev-ridho
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

function AppContent() {
  const [showPreloader, setShowPreloader] = useState(true); // Initialize preloader as visible

  useEffect(() => {
    if (showPreloader) {
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

  return (
    <div className="flex flex-col min-h-screen">
    {showPreloader && (
        <motion.section
          className='absolute overflow-hidden h-[100vh] w-full inset-0 z-[9999] flex justify-center items-center bg-[#E49800]'
          initial={{ y: 0 }}
          animate={{ y: '-100%', overflow: 'visible'}}
          transition={{ duration: 1, delay: 13 }}
        >
          <PreloaderContainer />
        </motion.section>
      )}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
          <Route path="/*" element={<Notfound />} />
          <Route path="/community/AgriUX" element={<AgriUX />} />
          <Route path="/community/CSI" element={<CSI />} />
          <Route path="/community/Agribot" element={<Agribot />} />
          <Route path="/community/CP" element={<CP />} />
          <Route path="/community/Daming" element={<Daming />} />
          <Route path="/community/IWDC" element={<IWDC />} />
          <Route path="/community/Gary" element={<Gary />} />
          <Route path="/community/MAD" element={<MAD />} />
          {/* <Route path="/igallery" element={<IGallery />} /> */}
          <Route path="/komnews" element={<Komnews />} />
          <Route path="/komnews/view/student-portal-ipb" element={<Komnews_dalem />} />
          <Route path="/komnews/view/rektor-ipb" element={<Komnews_dalem2 />}/>
          <Route path="/komnews/view/icollab-2024" element={<Komnews_dalem3 />}/>
          <Route path='/komnews/view/saungdesain-2023' element={<Komnews_dalem4 />}/>
          {/* <Route path="/research" element={<Riset />} /> */}
          {/* <Route path="/syntax" element={<Syntax />} /> */}
          <Route path="/igallery" element={<IGallery />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
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
