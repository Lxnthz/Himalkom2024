import { useState, useEffect } from 'react';
import axios from 'axios';

const SyntaxManagement = () => {
  const [syntaxList, setSyntaxList] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchSyntaxList();
  }, []);

  const fetchSyntaxList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/syntax');
      setSyntaxList(response.data);
    } catch (error) {
      console.error('Error fetching syntax list:', error);
    }
  };

  const handleAddSyntax = async () => {
    try {
      await axios.post('http://localhost:5000/syntax', { title, content });
      fetchSyntaxList();
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding syntax:', error);
    }
  };

  const handleUpdateSyntax = async () => {
    try {
      await axios.put(`http://localhost:5000/syntax/${editId}`, { title, content });
      fetchSyntaxList();
      setTitle('');
      setContent('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating syntax:', error);
    }
  };

  const handleDeleteSyntax = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/syntax/${id}`);
      fetchSyntaxList();
    } catch (error) {
      console.error('Error deleting syntax:', error);
    }
  };

  const handleEdit = (syntax) => {
    setEditId(syntax.id);
    setTitle(syntax.title);
    setContent(syntax.content);
  };

  return (
    <div>
      <h2>Manage Syntax</h2>
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
      <button onClick={editId ? handleUpdateSyntax : handleAddSyntax}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul>
        {syntaxList.map((syntax) => (
          <li key={syntax.id}>
            {syntax.title}
            <button onClick={() => handleEdit(syntax)}>Edit</button>
            <button onClick={() => handleDeleteSyntax(syntax.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SyntaxManagement;
