import { useState, useEffect } from 'react';
import axios from 'axios';

const DivisionManagement = () => {
  const [divisions, setDivisions] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchDivisions();
  }, []);

  const fetchDivisions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/divisions');
      setDivisions(response.data);
    } catch (error) {
      console.error('Error fetching divisions:', error);
    }
  };

  const handleAddDivision = async () => {
    try {
      await axios.post('http://localhost:5000/divisions', { name, description });
      fetchDivisions();
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding division:', error);
    }
  };

  const handleUpdateDivision = async () => {
    try {
      await axios.put(`http://localhost:5000/divisions/${editId}`, { name, description });
      fetchDivisions();
      setName('');
      setDescription('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating division:', error);
    }
  };

  const handleDeleteDivision = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/divisions/${id}`);
      fetchDivisions();
    } catch (error) {
      console.error('Error deleting division:', error);
    }
  };

  const handleEdit = (division) => {
    setEditId(division.id);
    setName(division.name);
    setDescription(division.description);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Manage Divisions</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Division Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E49800] focus:border-[#E49800]"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E49800] focus:border-[#E49800]"
        />
        <button
          onClick={editId ? handleUpdateDivision : handleAddDivision}
          className="w-full bg-[#E49800] text-white py-2 px-4 rounded-md shadow hover:bg-[#c47f00] focus:outline-none focus:ring-2 focus:ring-[#E49800] focus:ring-opacity-50"
        >
          {editId ? 'Update Division' : 'Add Division'}
        </button>
      </div>
      <ul className="space-y-4">
        {divisions.map((division) => (
          <li key={division.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div>
              <h3 className="text-lg font-semibold">{division.name}</h3>
              <p className="text-sm text-gray-600">{division.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(division)}
                className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteDivision(division.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DivisionManagement;
