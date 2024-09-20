import { useState } from 'react';
import DivisionManagement from '../components/admin/DivisionManagement';
import MemberManagement from '../components/admin/MemberManagement';
import SyntaxManagement from '../components/admin/SyntaxManagement';
import ResearchManagement from '../components/admin/ResearchManagement';
import NewsManagement from '../components/admin/NewsManagement';
import GalleryManagement from '../components/admin/GalleryManagement';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Division');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Division':
        return <DivisionManagement />;
      case 'Member':
        return <MemberManagement />;
      case 'Syntax':
        return <SyntaxManagement />;
      case 'Research':
        return <ResearchManagement />;
      case 'News':
        return <NewsManagement />;
      case 'Gallery':
        return <GalleryManagement />;
      default:
        return <DivisionManagement />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#E49800] text-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
      </header>
      <nav className="bg-white shadow-md p-2 flex justify-around">
        <button
          onClick={() => setActiveComponent('Division')}
          className={`py-2 px-4 rounded ${activeComponent === 'Division' ? 'bg-[#E49800] text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Division
        </button>
        <button
          onClick={() => setActiveComponent('Member')}
          className={`py-2 px-4 rounded ${activeComponent === 'Member' ? 'bg-[#E49800] text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Member
        </button>
        <button
          onClick={() => setActiveComponent('Syntax')}
          className={`py-2 px-4 rounded ${activeComponent === 'Syntax' ? 'bg-[#E49800] text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Syntax
        </button>
        <button
          onClick={() => setActiveComponent('Research')}
          className={`py-2 px-4 rounded ${activeComponent === 'Research' ? 'bg-[#E49800] text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Research
        </button>
        <button
          onClick={() => setActiveComponent('News')}
          className={`py-2 px-4 rounded ${activeComponent === 'News' ? 'bg-[#E49800] text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          News
        </button>
        <button
          onClick={() => setActiveComponent('Gallery')}
          className={`py-2 px-4 rounded ${activeComponent === 'Gallery' ? 'bg-[#E49800] text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Gallery
        </button>
      </nav>
      <main className="flex-grow p-6">
        {renderComponent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
