import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser, editUser } from '../api/peerfives';

function ViewUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUser(id);
        setName(response?.data?.name)
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [id]);

  const handleSave = async () => {
    await editUser(id, name);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit User</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate('/')}>Cancel</button>
      <button onClick={() => navigate(`/${id}/p5`)}>P5 Balance: {user?.p5Balance}</button>
      <button onClick={() => navigate(`/${id}/rewards`)}>Reward Balance: {user?.rewardBalance}</button>
    </div>
  );
}

export default ViewUser;
