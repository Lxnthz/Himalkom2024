import { useState, useEffect } from 'react';
import axios from 'axios';

const ResearchManagement = () => {
  const [researchList, setResearchList] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchResearchList();
  }, []);

  const fetchResearchList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/research');
      setResearchList(response.data);
    } catch (error) {
      console.error('Error fetching research list:', error);
    }
  };

  const handleAddResearch = async () => {
    try {
      await axios.post('http://localhost:5000/research', { title, content });
      fetchResearchList();
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding research:', error);
    }
  };

  const handleUpdateResearch = async () => {
    try {
      await axios.put(`http://localhost:5000/research/${editId}`, { title, content });
      fetchResearchList();
      setTitle('');
      setContent('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating research:', error);
    }
  };

  const handleDeleteResearch = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/research/${id}`);
      fetchResearchList();
    } catch (error) {
      console.error('Error deleting research:', error);
    }
  };

  const handleEdit = (research) => {
    setEditId(research.id);
    setTitle(research.title);
    setContent(research.content);
  };

  return (
    <div>
      <h2>Manage Research</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={editId ? handleUpdateResearch : handleAddResearch}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul>
        {researchList.map((research) => (
          <li key={research.id}>
            {research.title}
            <button onClick={() => handleEdit(research)}>Edit</button>
            <button onClick={() => handleDeleteResearch(research.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchManagement;
