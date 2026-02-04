import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function UserManagement() {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api.getTeamMembers('accepted')
      .then(setMembers)
      .catch(() => setError('Error fetching team members'));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Team members</h2>
      <pre>{JSON.stringify(members, null, 2)}</pre>
    </div>
  );
}
