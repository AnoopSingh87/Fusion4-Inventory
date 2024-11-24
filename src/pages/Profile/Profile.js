import React from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaBoxes, FaDollarSign, FaChartBar } from 'react-icons/fa';
import './UserProfilePage.css'; // Import CSS for styling

const UserProfilePage = () => {
  // Mock user data - replace with actual user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+123456789',
    address: '1234 Main St, Anytown, USA',
    bio: 'Warehouse Manager with 10+ years of experience in managing large-scale inventory systems.',
    avatarUrl: 'https://via.placeholder.com/150', // Placeholder image - replace with actual user avatar URL
    totalProducts: 150,
    totalStockValue: 250000,
    recentActivities: [
      { id: 1, activity: 'Added 50 units to "Product A"', date: '2024-09-01' },
      { id: 2, activity: 'Updated supplier details for "Supplier X"', date: '2024-08-29' },
      { id: 3, activity: 'Reviewed stock levels for "Product B"', date: '2024-08-25' },
    ],
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-header">
        <div className="user-profile-avatar">
          <img src={user.avatarUrl} alt="User Avatar" />
        </div>
        <h1>{user.name}</h1>
        <p className="user-profile-bio">{user.bio}</p>
        <button className="edit-profile-btn">
          <FaEdit /> Edit Profile
        </button>
      </div>

      <div className="user-profile-details">
        <div className="detail-item">
          <FaEnvelope className="detail-icon" />
          <span>{user.email}</span>
        </div>
        <div className="detail-item">
          <FaPhone className="detail-icon" />
          <span>{user.phone}</span>
        </div>
        <div className="detail-item">
          <FaMapMarkerAlt className="detail-icon" />
          <span>{user.address}</span>
        </div>
      </div>

      <div className="user-profile-stats">
        <div className="stat-item">
          <FaBoxes className="stat-icon" />
          <div>
            <h3>Total Products</h3>
            <p>{user.totalProducts}</p>
          </div>
        </div>
        <div className="stat-item">
          <FaDollarSign className="stat-icon" />
          <div>
            <h3>Total Stock Value</h3>
            <p>₹{user.totalStockValue.toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-item">
          <FaChartBar className="stat-icon" />
          <div>
            <h3>Recent Activities</h3>
            <ul>
              {user.recentActivities.map(activity => (
                <li key={activity.id}>{activity.activity} <span className="activity-date">({activity.date})</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
