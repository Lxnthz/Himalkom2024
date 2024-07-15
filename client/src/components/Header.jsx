import { useState } from 'react';
import { Link } from 'react-router-dom';
import ilkom from '../assets/logoilmukomputer.svg'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCommunityOpen, setIsCommunityOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleCommunityMenu = () => {
        setIsCommunityOpen(!isCommunityOpen);
    };

    return (
        <header className="py-4 px-10 bg-[#E49800] border-b-[4px] border-black relative flex flex-row justify-between items-center font-changa">
            <div className="flex justify-between items-center w-full">
                <div className="text-xl font-bold"><img className='max-w-12' src={ilkom}></img></div>
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
                    <button onClick={toggleMenu} className=" focus:outline-none">
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
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full space-y-4 font-changa">
                    <Link to="/" className=" text-2xl" onClick={toggleMenu}>Home</Link>
                    <button onClick={toggleProfileMenu} className=" text-2xl focus:outline-none lg:hidden">Profile</button>
                        {isProfileOpen && (
                            <div className="flex flex-col items-center space-y-2">
                                <Link to="/profile/details" className=" text-xl" onClick={toggleMenu}>Profile Details</Link>
                                {/*tambah disini*/}
                            </div>
                        )}
                    <button onClick={toggleCommunityMenu} className=" text-2xl focus:outline-none">Community</button>
                        {isCommunityOpen && (
                            <div className="flex flex-col items-center space-y-2">
                                <Link to="/community/forums" className=" text-xl" onClick={toggleMenu}>Forums</Link>
                                {/*tambah disini*/}
                            </div>
                        )}
                        <Link to="/igallery" className=" text-2xl" onClick={toggleMenu}>IGallery</Link>
                        <Link to="/komnews" className=" text-2xl" onClick={toggleMenu}>Komnews</Link>
                        <Link to="/research" className=" text-2xl" onClick={toggleMenu}>Research</Link>
                        <Link to="/syntax" className=" text-2xl" onClick={toggleMenu}>Syntax</Link>
                </nav>
            </div>
            <nav className="hidden lg:flex space-x-4">
                <Link to="/" className="block lg:inline-block mt-4 lg:mt-0">Home</Link>
                <div className="relative">
                    <button onClick={toggleProfileMenu} className="block lg:inline-block mt-4 lg:mt-0 focus:outline-none">Profile</button>
                    {isProfileOpen && (
                        <div className="absolute bg-white border rounded shadow-lg mt-2">
                            <Link to="/profile/details" className="block px-4 py-2 hover:bg-gray-200">Profile Details</Link>
                            <Link to="/profile/settings" className="block px-4 py-2 hover:bg-gray-200">Profile Settings</Link>
                        </div>
                    )}
                    </div>
                    <div className="relative">
                    <button onClick={toggleCommunityMenu} className="block md:inline-block mt-4 lg:mt-0 focus:outline-none">Community</button>
                        {isCommunityOpen && (
                            <div className="absolute bg-white border rounded shadow-lg mt-2">
                                <Link to="/community/forums" className="block px-4 py-2 hover:bg-gray-200">Forums</Link>
                                <Link to="/community/events" className="block px-4 py-2 hover:bg-gray-200">Events</Link>
                                <Link to="/community/members" className="block px-4 py-2 hover:bg-gray-200">Members</Link>
                            </div>
                        )}
                    </div>
                        <Link to="/igallery" className="block md:inline-block mt-4 lg:mt-0">IGallery</Link>
                        <Link to="/komnews" className="block md:inline-block mt-4 lg:mt-0">Komnews</Link>
                        <Link to="/research" className="block md:inline-block mt-4 lg:mt-0">Research</Link>
                        <Link to="/syntax" className="block md:inline-block mt-4 lg:mt-0">Syntax</Link>
            </nav>
        </header>
    );
}

export default Header;
