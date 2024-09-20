import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsManagement = () => {
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchNewsList();
  }, []);

  const fetchNewsList = async () => {
    try {
      const response = await axios.get('http://localhost:5000/news');
      setNewsList(response.data);
    } catch (error) {
      console.error('Error fetching news list:', error);
    }
  };

  const handleAddNews = async () => {
    try {
      await axios.post('http://localhost:5000/news', { title, content });
      fetchNewsList();
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  const handleUpdateNews = async () => {
    try {
      await axios.put(`http://localhost:5000/news/${editId}`, { title, content });
      fetchNewsList();
      setTitle('');
      setContent('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating news:', error);
    }
  };

  const handleDeleteNews = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/news/${id}`);
      fetchNewsList();
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  const handleEdit = (news) => {
    setEditId(news.id);
    setTitle(news.title);
    setContent(news.content);
  };

  return (
    <div>
      <h2>Manage News</h2>
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
      <button onClick={editId ? handleUpdateNews : handleAddNews}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul>
        {newsList.map((news) => (
          <li key={news.id}>
            {news.title}
            <button onClick={() => handleEdit(news)}>Edit</button>
            <button onClick={() => handleDeleteNews(news.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsManagement;
