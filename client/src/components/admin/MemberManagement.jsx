import { useState, useEffect } from 'react';
import axios from 'axios';

const MemberManagement = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/members');
      setMembers(response.data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const handleAddMember = async () => {
    try {
      await axios.post('http://localhost:5000/members', { name, position });
      fetchMembers();
      setName('');
      setPosition('');
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  const handleUpdateMember = async () => {
    try {
      await axios.put(`http://localhost:5000/members/${editId}`, { name, position });
      fetchMembers();
      setName('');
      setPosition('');
      setEditId(null);
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/members/${id}`);
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const handleEdit = (member) => {
    setEditId(member.id);
    setName(member.name);
    setPosition(member.position);
  };

  return (
    <div>
      <h2>Manage Members</h2>
      <input
        type="text"
        placeholder="Member Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button onClick={editId ? handleUpdateMember : handleAddMember}>
        {editId ? 'Update' : 'Add'}
      </button>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.position}
            <button onClick={() => handleEdit(member)}>Edit</button>
            <button onClick={() => handleDeleteMember(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberManagement;
