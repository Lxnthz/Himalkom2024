import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="p-4 bg-gray-800 text-white">
        <nav>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/about" className="mr-4">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </header>
    );
}

export default Header;
