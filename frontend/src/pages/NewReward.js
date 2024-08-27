import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createTransaction, getUser } from '../api/peerfives';

function NewReward() {
  const { id } = useParams();
  const [points, setPoints] = useState('');
  const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user balances and all other users
    // Placeholder: Mock data
    setBalance(100);
    setUsers([
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' }
    ]);
  }, [id]);

  const handleSubmit = async () => {
    if (points > balance) return;
    await createTransaction(id, users[0].id, points);
    navigate(`/${id}/rewards`);
  };

  return (
    <div>
      <h1>Create New Reward</h1>
      <select>
        {users.map(user => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        max="100"
      />
      <p>P5 Balance: {balance}</p>
      <button onClick={handleSubmit} disabled={points > 100 || points > balance}>Submit</button>
      <button onClick={() => navigate(`/${id}/rewards`)}>Cancel</button>
    </div>
  );
}

export default NewReward;
