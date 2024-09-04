import { useState, useEffect } from 'react';
import axios from 'axios';

const GalleryManagement = () => {
  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await axios.get('http://localhost:5000/gallery');
      setGallery(response.data);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  const handleAddImage = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/gallery', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchGallery();
      setTitle('');
      setImage(null);
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };

  const handleUpdateImage = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    try {
      await axios.put(`http://localhost:5000/gallery/${editId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      fetchGallery();
      setTitle('');
      setImage(null);
      setEditId(null);
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/gallery/${id}`);
      fetchGallery();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
  };

  return (
    <div>
      <h2>Manage Gallery</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={editId ? handleUpdateImage : handleAddImage}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul>
        {gallery.map((item) => (
          <li key={item.id}>
            <img src={`http://localhost:5000/${item.imagePath}`} alt={item.title} width="100" />
            <p>{item.title}</p>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDeleteImage(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryManagement;
