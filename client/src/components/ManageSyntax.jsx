import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSyntax = () => {
    const [syntaxList, setSyntaxList] = useState([]);
    const [cover, setCover] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
  
    useEffect(() => {
      fetchSyntax();
    }, []);
  
    const fetchSyntax = async () => {
      try {
        const response = await axios.get('http://localhost:5000/syntax');
        setSyntaxList(response.data);
      } catch (error) {
        console.error('Error fetching syntax:', error);
      }
    };
  
    const addSyntax = async () => {
      try {
        await axios.post('http://localhost:5000/syntax', { cover, title, year });
        fetchSyntax();
      } catch (error) {
        console.error('Error adding syntax:', error);
      }
    };
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Manage Syntax Reports</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <button onClick={addSyntax} className="bg-blue-500 text-white px-4 py-2">Add Syntax Report</button>
        </div>
        <ul>
          {syntaxList.map((syntax) => (
            <li key={syntax.id} className="border-b p-4">
              <h3 className="text-xl font-semibold">{syntax.title}</h3>
              <p>{syntax.year}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ManageSyntax;