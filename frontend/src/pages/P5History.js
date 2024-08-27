import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteTransaction, getUserDebit } from '../api/peerfives';

function P5History() {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUserDebit(id);
        setTransactions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [id]);

  const handleDelete = async (transactionId) => {
    await deleteTransaction(transactionId);
    // Remove transaction from state after deletion
    setTransactions(transactions.filter(t => t.id !== transactionId));
  };

  return (
    <div>
      <h1>P5 History</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date-Time</th>
            <th>P5 Given</th>
            <th>User Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{index + 1}</td>
              <td>{(new Date(transaction.timestamp).toDateString())}</td>
              <td>{transaction.points}</td>
              <td>{transaction.toUserName}</td>
              <td><button onClick={() => handleDelete(transaction.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default P5History;
