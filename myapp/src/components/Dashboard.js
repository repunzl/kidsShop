import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import './Dashboard.css';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales over time',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true); 
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="dashboard-container">
      {!isAuthenticated ? (
        <div className="auth-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="btn-primary">Login</button>
          </form>
        </div>
      ) : (
        <div className="dashboard">
          <h2>Dashboard Overview</h2>
          <p>Welcome to your dashboard! Here's a quick overview of the stats.</p>

          <div className="card">
            <div className="title">Sales Trend</div>
            <div className="value">
              <Line data={data} options={options} height={200} width={400} />
            </div>
          </div>

          <button className="btn-primary">View More</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;




