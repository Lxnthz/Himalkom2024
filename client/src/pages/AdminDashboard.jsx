import { Link, Route, Routes } from 'react-router-dom';
import ManageNews from '../components/ManageNews';
import ManageDivisions from '../components/ManageDivisions';
import ManageResearch from '../components/ManageResearch';
import ManageSyntax from '../components/ManageSyntax';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-gray-800 text-white min-h-screen p-6">
        <h2 className="text-2xl font-semibold mb-6">Menu</h2>
        <ul>
          <li className="mb-4"><Link to="/admin-dashboard/news" className="hover:text-gray-300">Manage News</Link></li>
          <li className="mb-4"><Link to="/admin-dashboard/divisions" className="hover:text-gray-300">Manage Divisions</Link></li>
          <li className="mb-4"><Link to="/admin-dashboard/research" className="hover:text-gray-300">Manage Research</Link></li>
          <li className="mb-4"><Link to="/admin-dashboard/syntax" className="hover:text-gray-300">Manage Syntax Reports</Link></li>
        </ul>
      </aside>
      <main className="w-3/4 p-8">
        <Routes>
          <Route path="news" element={<ManageNews />} />
          <Route path="divisions" element={<ManageDivisions />} />
          <Route path="research" element={<ManageResearch />} />
          <Route path="syntax" element={<ManageSyntax />} />
          <Route path="/" element={<h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
