import React from 'react';
import ReactDOM from 'react-dom/client';

function Dashboard() {
  return (
    <main style={{ background: '#09090b', color: '#fff', minHeight: '100vh', padding: 24 }}>
      <h1 style={{ color: '#a3e635' }}>RideConnect Admin</h1>
      <p>Users, moderation reports and analytics dashboards bootstrap.</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Dashboard />);
