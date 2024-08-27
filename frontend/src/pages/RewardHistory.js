import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactionsById, getUser, getUserCredit } from '../api/peerfives';

function RewardHistory() {
  const { id } = useParams();
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserCredit(id);
        setRewards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();

    // setRewards([
    //   { id: 1, dateTime: '2024-08-27 11:00', points: 10, userName: 'User 2' },
    //   { id: 2, dateTime: '2024-08-28 15:00', points: 20, userName: 'User 3' }
    // ]);
  }, [id]);

  return (
    <div>
      <h1>Reward History</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date-Time</th>
            <th>Rewards Received</th>
            <th>From</th>
          </tr>
        </thead>
        <tbody>
          {rewards.map((reward, index) => (
            <tr key={reward.id}>
              <td>{index + 1}</td>
              <td>{(new Date(reward?.timestamp)).toDateString()}</td>
              <td>{reward.points}</td>
              <td>{reward.fromUserName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RewardHistory;
