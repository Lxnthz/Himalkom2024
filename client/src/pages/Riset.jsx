import { useState, useEffect } from 'react';
import axios from 'axios';

const Riset = () => {
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/research');
        setResearchData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Research Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {researchData.map((research) => (
          <div key={research.id} className="border p-4 rounded">
            {research.cover && (
              <img
                src={`http://localhost:5000/uploads/${research.cover}`}
                alt={research.title}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <h3 className="text-xl font-bold">{research.title}</h3>
            <p className="text-gray-600">{new Date(research.date).toLocaleDateString()}</p>
            <a href={research.link} className="text-blue-500">
              {research.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Riset;
