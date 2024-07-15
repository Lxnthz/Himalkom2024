import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageResearch = () => {
  const [researchList, setResearchList] = useState([]);
  const [cover, setCover] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    fetchResearch();
  }, []);

  const fetchResearch = async () => {
    try {
      const response = await axios.get('http://localhost:5000/research');
      setResearchList(response.data);
    } catch (error) {
      console.error('Error fetching research:', error);
    }
  };

  const addResearch = async () => {
    try {
      await axios.post('http://localhost:5000/research', { cover, title, date, link });
      fetchResearch();
    } catch (error) {
      console.error('Error adding research:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Research</h2>
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
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button onClick={addResearch} className="bg-blue-500 text-white px-4 py-2">Add Research</button>
      </div>
      <ul>
        {researchList.map((research) => (
          <li key={research.id} className="border-b p-4">
            <h3 className="text-xl font-semibold">{research.title}</h3>
            <p>{research.date}</p>
            <a href={research.link} className="text-blue-500">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageResearch;
