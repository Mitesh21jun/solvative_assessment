import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListView from './pages/UserListView';
import NewUser from './pages/NewUser';
import ViewUser from './pages/ViewUser';
import P5History from './pages/P5History';
import RewardHistory from './pages/RewardHistory';
import NewReward from './pages/NewReward';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserListView />} />
        <Route path="/new" element={<NewUser />} />
        <Route path="/:id" element={<ViewUser />} />
        <Route path="/:id/p5" element={<P5History />} />
        <Route path="/:id/rewards" element={<RewardHistory />} />
        <Route path="/:id/rewards/new" element={<NewReward />} />
      </Routes>
    </Router>
  );
}

export default App;
