import { useState } from 'react';
import { Link } from 'react-router-dom';
import ilkom from '../assets/logoilmukomputer.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);
    const [isProfileDivisiOpen, setIsProfileDivisiOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleCommunityMenu = () => {
        setIsCommunityOpen(!isCommunityOpen);
    };

    const toggleProfileDivisiMenu = () => {
        setIsProfileDivisiOpen(!isProfileDivisiOpen);
    };

    return (
        <header className="py-4 px-10 bg-[#E49800] border-b-[4px] border-black relative flex flex-row justify-between items-center font-changa">
        <div className="flex justify-between items-center w-full">
            <div className="text-xl font-bold">
            <img className='max-w-12' src={ilkom} alt="Ilmu Komputer Logo" />
            </div>
            <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
                </svg>
            </button>
            </div>
        </div>
        <div
            className={`fixed inset-0 bg-[#E49800] transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out lg:hidden`}
        >
            <div className="absolute top-0 right-0 p-4">
            <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                ></path>
                </svg>
            </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full gap-1 font-changa">
            <Link to="/" className="text-2xl" onClick={toggleMenu}>Home</Link>
            <button onClick={toggleProfileMenu} className="text-2xl focus:outline-none lg:hidden">Profile</button>
            <div className={`flex flex-col items-center space-y-2 transition-max-height duration-300 ease-in-out overflow-hidden ${isProfileOpen ? 'max-h-[25rem]' : 'max-h-0'}`}>
                <Link to="/profile/details" className="text-xl" onClick={toggleMenu}>Profile Himalkom</Link>
                <button onClick={toggleProfileDivisiMenu} className="text-xl focus:outline-none lg:hidden">Profile Divisi</button>
                <div className={`flex flex-col items-center space-y-2 transition-max-height duration-300 ease-in-out overflow-hidden ${isProfileDivisiOpen ? 'max-h-[25rem]' : 'max-h-0'}`}>
                    <Link to="/profile/divisi/bp" className="text-lg" onClick={toggleMenu}>BP</Link>
                    <Link to="/profile/divisi/bph" className="text-lg" onClick={toggleMenu}>BPH</Link>
                    <Link to="/profile/divisi/eksternal" className="text-lg" onClick={toggleMenu}>Eksternal</Link>
                    <Link to="/profile/divisi/internal" className="text-lg" onClick={toggleMenu}>Internal</Link>
                    <Link to="/profile/divisi/edukasi" className="text-lg" onClick={toggleMenu}>Edukasi</Link>
                    <Link to="/profile/divisi/hrd" className="text-lg" onClick={toggleMenu}>HRD</Link>
                    <Link to="/profile/divisi/medbrand" className="text-lg" onClick={toggleMenu}>Media Branding</Link>
                    <Link to="/profile/divisi/ristek" className="text-lg" onClick={toggleMenu}>Riset dan Teknologi</Link>
                    <Link to="/profile/divisi/entrepreneur" className="text-lg" onClick={toggleMenu}>Entrepreneur</Link>
                </div>
            </div>
            <button onClick={toggleCommunityMenu} className="text-2xl focus:outline-none">Community</button>
            <div className={`flex flex-col items-center space-y-2 transition-max-height duration-300 ease-in-out overflow-hidden ${isCommunityOpen ? 'max-h-40' : 'max-h-0'}`}>
                <Link to="/community" className="text-xl" onClick={toggleMenu}>Forums</Link>
                {/* Add more links here */}
            </div>
            <Link to="/igallery" className="text-2xl" onClick={toggleMenu}>IGallery</Link>
            <Link to="/komnews" className="text-2xl" onClick={toggleMenu}>Komnews</Link>
            <Link to="/research" className="text-2xl" onClick={toggleMenu}>Research</Link>
            <Link to="/syntax" className="text-2xl" onClick={toggleMenu}>Syntax</Link>
            </nav>
        </div>
            <nav className="hidden lg:flex space-x-4">
                <Link to="/" className="block lg:inline-block mt-4 lg:mt-0 hover:text-gray-700">Home</Link>
                <div className="relative group">
                    <button className="block lg:inline-block mt-4 lg:mt-0 focus:outline-none group-hover:text-gray-700">Profile</button>
                    <div className="absolute left-0 min-w-[200px] bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                        <Link to="/profile/details" className="block px-4 py-2 hover:bg-gray-200">Profile Himalkom</Link>
                        <div className="relative">
                        <button onClick={toggleProfileDivisiMenu} className="block w-full text-left px-4 py-2 focus:outline-none hover:bg-gray-200">Profile Divisi</button>
                        <div className={`flex flex-col bg-white border rounded shadow-lg transition-max-height duration-1000 ease-in-out overflow-hidden ${isProfileDivisiOpen ? 'max-h-[25rem]' : 'max-h-0'}`}>
                            <Link to="/profile/divisi/bp" className="block px-4 py-2 hover:bg-gray-200">BP</Link>
                            <Link to="/profile/divisi/bph" className="block px-4 py-2 hover:bg-gray-200">BPH</Link>
                            <Link to="/profile/divisi/eksternal" className="block px-4 py-2 hover:bg-gray-200">Eksternal</Link>
                            <Link to="/profile/divisi/internal" className="block px-4 py-2 hover:bg-gray-200">Internal</Link> 
                            <Link to="/profile/divisi/edukasi" className="block px-4 py-2 hover:bg-gray-200">Edukasi</Link>
                            <Link to="/profile/divisi/hrd" className="block px-4 py-2 hover:bg-gray-200">HRD</Link>
                            <Link to="/profile/divisi/medbrand" className="block px-4 py-2 hover:bg-gray-200">Media Branding</Link>
                            <Link to="/profile/divisi/ristek" className="block px-4 py-2 hover:bg-gray-200">Riset dan Teknologi</Link>
                            <Link to="/profile/divisi/entrepreneur" className="block px-4 py-2 hover:bg-gray-200">Entrepreneur</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <button className="block lg:inline-block mt-4 lg:mt-0 focus:outline-none group-hover:text-gray-700">Community</button>
                    <div className="absolute left-0 min-w-[200px] bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                        <Link to="/community" className="block px-4 py-2 hover:bg-gray-200">AgriUX</Link>
                        <Link to="/community/events" className="block px-4 py-2 hover:bg-gray-200">CSI</Link>
                        <Link to="/community/members" className="block px-4 py-2 hover:bg-gray-200">Agribot</Link>
                    </div>
                </div>
                    <Link to="/igallery" className="block lg:inline-block mt-4 lg:mt-0 hover:text-gray-700">IGallery</Link>
                    <Link to="/komnews" className="block lg:inline-block mt-4 lg:mt-0 hover:text-gray-700">Komnews</Link>
                    <Link to="/research" className="block lg:inline-block mt-4 lg:mt-0 hover:text-gray-700">Research</Link>
                    <Link to="/syntax" className="block lg:inline-block mt-4 lg:mt-0 hover:text-gray-700">Syntax</Link>
            </nav>
        </header>
    );
}

export default Header;
