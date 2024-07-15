import { useState, useEffect } from 'react';
import axios from 'axios';

const ManageNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/news');
      setNewsList(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const addNews = async () => {
    try {
      await axios.post('http://localhost:5000/news', { title, content });
      fetchNews();
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage News</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button onClick={addNews} className="bg-blue-500 text-white px-4 py-2">Add News</button>
      </div>
      <ul>
        {newsList.map((news) => (
          <li key={news.id} className="border-b p-4">
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p>{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageNews;
