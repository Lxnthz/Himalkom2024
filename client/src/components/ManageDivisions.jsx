import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageDivisions = () => {
  const [divisions, setDivisions] = useState([]);
  const [divisionName, setDivisionName] = useState('');

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

  const addDivision = async () => {
    try {
      await axios.post('http://localhost:5000/divisions', { name: divisionName });
      fetchDivisions();
    } catch (error) {
      console.error('Error adding division:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Divisions</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Division Name"
          value={divisionName}
          onChange={(e) => setDivisionName(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button onClick={addDivision} className="bg-blue-500 text-white px-4 py-2">Add Division</button>
      </div>
      <ul>
        {divisions.map((division) => (
          <li key={division.id} className="border-b p-4">{division.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageDivisions;
